import React, { useState } from "react";
import IssueHeader from "./IssueHeader";
import { IssuesStore, IssuesStoreContext } from "./useIssueStore";
import IssueMain from "./IssueMain";

const IssuePage = () => {
  const [issuesStore] = useState(new IssuesStore());

  return (
    <IssuesStoreContext.Provider value={issuesStore}>
      <div className="container">
        <IssueHeader />
        <IssueMain />
      </div>
    </IssuesStoreContext.Provider>
  );
};

export default IssuePage;
