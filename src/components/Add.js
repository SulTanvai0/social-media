import { Box, Fab, Modal, Tooltip, styled, Typography, Avatar, TextField, Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SendIcon from '@mui/icons-material/Send';
import { Stack } from '@mui/system';
import { DateRange } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: `calc${(50 % -25)}`, md: 30 } }} onClick={() => setOpen(true)} >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign="center">Create post</Typography>
                    <UserBox>
                        <Avatar
                            src=""
                            sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant="span" >SulTan Vai</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on you mind?"
                        variant="standard" />
                    <Stack direction="row" gap={1} mb={3} mt={2}>
                        <EmojiEmotionsIcon color="primary" />
                        <CameraAltIcon color="secondary" />
                        <PersonAddAlt1Icon color="success" />
                        <SendIcon color="primary" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained" aria-label="outlined primary button group">
                        <Button >post</Button>
                        <Button sx={{ width: "100px" }} >
                            <DateRange />
                        </Button>

                    </ButtonGroup>

                </Box>
            </StyledModal>
        </>
    );
};

export default Add;