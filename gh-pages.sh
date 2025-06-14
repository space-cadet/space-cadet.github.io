#!/bin/bash

while IFS= read -r repo; do 
  if url=$(gh api "repos/$repo/pages" --jq '.html_url' 2>/dev/null); then 
    printf '%s uses %s\n' "$repo" "$url"
  fi
done < <(gh repo list --limit 500 | awk '{print $1}')
