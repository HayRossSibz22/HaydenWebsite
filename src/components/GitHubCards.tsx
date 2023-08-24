import React, { Component } from "react";
import Axios from "axios";
import baseURL from "../API/GitHub";
import RepoCard from "./RepoCard";
import { Grid } from "@material-ui/core";



const username = "HayRossSibz22";

interface Repo {
    id: number;
    html_url: string;
    name: string;
    language: string;
    description: string;
}

const repos = ref<Repo[]>([]);

onMounted(() => {
    // Check if repos data is already present in localStorage
    const cachedRepos = localStorage.getItem("repos");
    if (cachedRepos) {
        repos.value = JSON.parse(cachedRepos);
    } else {
        const repoXHR = new XMLHttpRequest();
        repoXHR.open(
            "GET",
            `https://api.github.com/users/${username}/repos`,
            true
        );
        repoXHR.onload = function () {
            if (repoXHR.readyState === 4 && repoXHR.status === 200) {
                repos.value = JSON.parse(repoXHR.response);
                // Store repos data in localStorage for future use
                localStorage.setItem("repos", JSON.stringify(repos.value));
            }
        };
        repoXHR.send();
    }
});


export default function GitHubCards() {

  return (
    <>
      <h1>Projects</h1>
    <ul>
        <li v-for="repo in repos" :key="repo.id">
            <a :href="repo.html_url">
                <div class="repo">{{ repo.name }}</div>
                <div class="lang">{{ repo.language }}</div>
                <div class="desc">{{ repo.description }}</div>
            </a>
        </li>
    </ul>
    </>
  }
<style scoped>
ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    max-width: 1080px;
}

li {
    box-sizing: border-box;
    width: 100%;
    max-width: 16em;
    height: 11em;
    vertical-align: top;
    list-style: none;
    margin: 1em 0.5em 0 0.5em;
    padding: 0.5em;
    overflow: hidden;
    text-overflow: ellipsis;
}

a {
    height: 11em;
    border-top: 0.5em solid hsl(0, 0%, 94%);
    display: flex;
    flex-direction: column;
    justify-content: top;
    color: hsl(0, 0%, 0%);
    text-decoration: none;
    padding: 0 0.5em 0 0;
    margin: 0;
    font-size: 1.3em;
    font-weight: 400;
    transition: border-top-color 0.3s ease-out;
}

.repo {
    color: hsl(0, 0%, 0%);
    font-size: 1.1em;
    font-weight: 200;
    margin: 0.2em 0 0 0;
}

.lang {
    color: hsl(0, 0%, 900%);
    font-size: 0.8em;
    margin: 0.2em 0 0 0;
}

.desc {
    color: hsl(0, 0%, 100%);
    text-overflow: inherit;
}

@media screen and (max-width: 800px) {
    ul {
        flex-direction: column;
    }

    li {
        width: auto;
        max-width: none;
    }
}

/* Remove the hover effect on mobile */
@media screen and (min-width: 800px) {
    a:hover {
        border-top: 0.5em solid hsl(0, 0%, 0%);
        transition: border-top-color 0.1s ease-out;
    }
}
</style>