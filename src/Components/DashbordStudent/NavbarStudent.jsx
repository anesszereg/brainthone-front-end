import {Box, IconButton, TextField, Typography} from '@mui/material'
import student from '../../assets/Svgs/studentDash.svg'
import {FiSearch} from 'react-icons/fi'


function NavbarStudent() {
    return (
        <Box display={'flex'}
            justifyContent={'space-between'}>
            <Box display={'flex'}
                gap={'30px'}>
                <img src={student}
                    alt=""/>

                <Box>
                    <Typography color='#000'
                        fontSize={'40px'}
                        fontWeight={'600'}
                        textAlign={'start'}>Welcome back</Typography>
                    <Typography color='#696969'
                        fontSize={'20px'}
                        fontWeight={'600'}
                        textAlign={'start'}>student Name</Typography>

                </Box>

            </Box>
            <Box>
                <input type="text" placeholder='Search your course'
                    style={
                        {

                            borderRadius: '7px',
                            border: ' 4.08px solid #000',
                            boxShadow: '3.08434px 3.08434px 0px 0px #000',
                            height: '64px',
                            width: '349px',
                            background: '#fff',
                            paddingLeft:'20px',
                            fontSize:'20px'


                        }

                    }/>

            </Box>
        </Box>
    )
}

export default NavbarStudent
