import { createContext, useState } from "react";
import { forumData } from "../db/ForumData";

export const ForumDataContext = createContext();

export function ForumDataProvider({ children }) {
  const [updatedForumData, setUpdatedForumData] = useState(forumData);
  return (
    <ForumDataContext.Provider
      value={{ updatedForumData, setUpdatedForumData }}
    >
      {children}
    </ForumDataContext.Provider>
  );
}
