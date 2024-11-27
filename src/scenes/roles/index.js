// ** React Imports
import { Box} from "@mui/material";

// ** Roles Components
import RoleCards from './RoleCards'
import Team from "../team/index"
const Roles = () => {
  return (
    <Box  m="40px 20px 20px 20px" style={{ Padding: 2 }}>
      <h3>Roles List</h3>
      <p className='mb-2'>
        A role provides access to predefined menus and features depending on the assigned role to an administrator that
        can have access to what he needs.
      </p>
      <RoleCards />
  
      <div className='app-user-list'>
        <Team />
      </div>
    </Box>
  )
}

export default Roles
