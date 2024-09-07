import { useEffect } from "react";
export const useGetUsers = (setUsers)=> {
  const getUser = async()=> {
    const response = await fetch("https://dummyjson.com/users");
    const jsonDta = await response.json();
    setUsers(jsonDta.users)
  };
  
  useEffect (()=> {
    getUser();
  }, []);
}