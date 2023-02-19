import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const RightBar = () => {

    return (
        <Box
            flex={1.5}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed" width={300} mb={2} mt={2}>
                <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
                <AvatarGroup total={24}>
                    <Avatar alt="Niharika " src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/299987395_5162333780556738_7280415947161951656_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBZMR5Oiyw-M736dTiz5FYhsqX3Rm7OaeGypfdGbs5p0vMzCOgrcGuRG5N28l7YsTNYBQRc1PdvdVS-4fy5jMg&_nc_ohc=jV06zoaxTwgAX9KFN66&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCEJ_-3rp5dUvxx7nDU6YjaNTLKcMjmLn3Y12pr-EmPBQ&oe=63CDDEA9" />
                    <Avatar alt="Parsa" src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/274990719_142553604909043_9061067482315685879_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHfrWix_5e0nv_6NnSKd36Lw8MeTiD8xcrDwx5OIPzFytTU5YXluqeHyvMFOcuq3zmKb4o9W6ll25y4h0Vfwx-0&_nc_ohc=gc3KU5qTQdUAX82ZUrQ&_nc_ht=scontent.fdac24-3.fna&oh=00_AfBP6fsbLhMM3PWuTlTgeZVSz9MpNhLMCKIWyyeL3ksXQQ&oe=63CC92CF" />
                    <Avatar alt="Opi" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/288839800_969305287078083_550804911286384685_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFGI-zRNPE2JFWzWB8RXWrGChUwrma5YQoKFTCuZrlhCnmibMlUXOmSl7dccdC4lMvo1zunAUVTIfzEQFoEcb1R&_nc_ohc=vhhB7ut6k3sAX_1o4Hi&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDZD1HeOg3Bm--PYNUz3-Z9jEGojOEYg1lLg_KPE8j5Ag&oe=63CC0516" />
                    <Avatar alt="Rafi" src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/273690341_645549919999834_3459245543845529991_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a4a2d7&_nc_eui2=AeGJTrDRVBCB3FJbQSoLXKXobb5SEVyDhY1tvlIRXIOFjX4yXsN7U5B1Cer_jf8NudpkqIqcD8Jyk9zrETAe74Q3&_nc_ohc=CP_F7LTG6ZoAX9q52MO&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCZVRi-Dla01MrO0hM1rc-0EVgX-o9g9G64aFCMpUumeQ&oe=63CDE035" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100}>
                    <ImageListItem>
                        <img src="https://i.pinimg.com/originals/e4/66/04/e466048125f1cd832d848cd4a476388a.jpg" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcjb37k7YjRZZzndIiwtRVUw7YBDXCAVZtfQ&usqp=CAU" alt="" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeXy7WPsMtpEjGW_R45MosfqKcA7Jem_hXA&usqp=CAU" alt="" />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100}>Latest Conversation</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/299987395_5162333780556738_7280415947161951656_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFBZMR5Oiyw-M736dTiz5FYhsqX3Rm7OaeGypfdGbs5p0vMzCOgrcGuRG5N28l7YsTNYBQRc1PdvdVS-4fy5jMg&_nc_ohc=jV06zoaxTwgAX9KFN66&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCEJ_-3rp5dUvxx7nDU6YjaNTLKcMjmLn3Y12pr-EmPBQ&oe=63CDDEA9" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Nhatheya Haque"
                            secondary={
                                <React.Fragment>

                                    {" Hello ...."}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/322131470_553437186658585_7010036868752344533_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHYYhpKndz-vFjG5zo7XzzTyAxylQQe7RjIDHKVBB7tGFZsRTgD4-rUUkMMZ3d725ncSmcEE4yv-ACvx2C6dwY3&_nc_ohc=OlOzSA_0toYAX9JAHOT&tn=y80EtTL2ytFv3HVm&_nc_ht=scontent.fdac24-3.fna&oh=00_AfBryFPc6oqj1WS9Gov-K-GdJablPwIXY2naPyfur-CM8w&oe=63CC374A" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Ekramul Hoque"
                            secondary={
                                <React.Fragment>

                                    {"How's evreythig going "}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/273690341_645549919999834_3459245543845529991_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a4a2d7&_nc_eui2=AeGJTrDRVBCB3FJbQSoLXKXobb5SEVyDhY1tvlIRXIOFjX4yXsN7U5B1Cer_jf8NudpkqIqcD8Jyk9zrETAe74Q3&_nc_ohc=CP_F7LTG6ZoAX9q52MO&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCZVRi-Dla01MrO0hM1rc-0EVgX-o9g9G64aFCMpUumeQ&oe=63CDE035" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Mohammad Minwar Hossain Rafi"
                            secondary={
                                <React.Fragment>

                                    {'available ? ..'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default RightBar;