import { makeAutoObservable, runInAction } from "mobx";
import { createContext, useContext } from "react";
import { Issue } from "types/types";

export class IssuesStore {
  issues: Issue[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchIssues = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/facebook/create-react-app/issues",
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const rawIssues: any[] = await response.json();
      const formattedIssues = rawIssues.map((issue): Issue => {
        return {
          number: issue.number,
          title: issue.title,
          date: issue.created_at,
          comments: issue.comments,
          nickname: issue.user.login,
          avatar: issue.user.avatar_url,
        };
      });

      const sortedIssues = formattedIssues.sort((issueA, issueB) => {
        if (issueA.comments === issueB.comments) {
          return issueA.number > issueB.number ? -1 : 1;
        }

        return issueA.comments > issueB.comments ? -1 : 1;
      });

      runInAction(() => {
        this.issues = sortedIssues;
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const IssuesStoreContext = createContext<IssuesStore | null>(null);

const useIssuesStore = () => {
  const issuesStore = useContext(IssuesStoreContext);

  if (!issuesStore) {
    throw new Error(
      "useIssuesStore must be used under IssuesStoreContext.Provider",
    );
  }

  return issuesStore;
};

export default useIssuesStore;
