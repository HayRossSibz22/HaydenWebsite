
import Axios from "axios";
import baseURL from "../API/GitHub";
import RepoCard from "./RepoCard";
import { Grid } from "@material-ui/core";


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
    <>
      <h1>Projects</h1>
      <ul>
        {starredRepos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>
              <div className="repo">{repo.name}</div>
              <div className="lang">{repo.language}</div>
              <div className="desc">{repo.description}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GitHubCards;