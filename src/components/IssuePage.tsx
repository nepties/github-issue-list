import React, { useState } from "react";
import IssueHeader from "./IssueHeader";
import { IssuesStore, IssuesStoreContext } from "./useIssueStore";
// import IssuesMain from "./components/IssuesMain";

const IssuePage = () => {
  const [issuesStore] = useState(new IssuesStore());

  return (
    <IssuesStoreContext.Provider value={issuesStore}>
      <div className="container">
        <IssueHeader />
        {/* <IssuesMain /> */}
      </div>
    </IssuesStoreContext.Provider>
  );
};

export default IssuePage;
