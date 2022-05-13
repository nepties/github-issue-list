import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

export class IssuesStore {
  issues = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchIssues = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/facebook/create-react-app/issues",
      );
      const issues = response.json();
      console.log(issues);
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
