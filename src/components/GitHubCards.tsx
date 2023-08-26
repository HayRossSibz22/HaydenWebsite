
import Axios from "axios";
import { Grid } from "@material-ui/core";
import './GitHubCards.css';

import React, { useState, useEffect } from 'react';

const username = 'HayRossSibz22';

interface StarredRepo {
    id: number;
    html_url: string;
    name: string;
    language: string;
    description: string;
  }
  
  const GitHubCards: React.FC = () => {
    const [starredRepos, setStarredRepos] = useState<StarredRepo[]>([]);
  
    useEffect(() => {
      Axios
        .get(`https://api.github.com/users/${username}/starred`)
        .then((response) => {
          const fetchedStarredRepos: StarredRepo[] = response.data;
          setStarredRepos(fetchedStarredRepos);
          // Store starred repos data in localStorage for future use
          localStorage.setItem('starredRepos', JSON.stringify(fetchedStarredRepos));
        })
        .catch((error) => {
          console.error('Error fetching starred repositories:', error);
        });
    }, []);
  
    return (
        <div className="github-cards-container">
          <h1>Repositories</h1>
          <ul className="repo-list">
            {starredRepos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <div className="repo-title">{repo.name}</div>
                  <div className="sub-category">Language: {repo.language}</div>
                  <div className="sub-category">Description: {repo.description}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default GitHubCards;