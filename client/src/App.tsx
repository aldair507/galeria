import { useUsers } from "./hooks/useUsers"
import { UserList } from "./components/UserList"
import './App.css'
import './index.css'
import { UsersForm } from "./components/UserForm"
export const App = () => {
 const {users,refetchUsers}=useUsers()
 console.log(useUsers)
  return (
    <main>
      {/* {user form } */}
      <UserList users={users}/>
      <UsersForm refetchUsers={refetchUsers}/>
      {/* user list */}
    </main>
  )
  
}
