import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Grid, CircularProgress, Container } from '@material-ui/core';
import useStyles from './styles';

import Post from '../Posts/Post/post'

const Posts = () => {

    const classes = useStyles();

    const posts = useSelector((state) => state.postReducers.data)
    console.log(posts);
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch({type:"CLEAR"});
    }, [location])

    
    return (
        <div>
        <br/>
            {
                posts ? 
                (
                    <Container>
                        <Grid className={classes.container} container alignItems="stretch" spacing={5}>
                            {posts.map((post) => (
                                <Grid key={post._id} item xs={12} sm={3} >
                                    <Post post={post} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                ):
                (
                    <CircularProgress/>
                )

            }
        </div>
    );
}
export default Posts;