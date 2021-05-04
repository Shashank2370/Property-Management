import React,{useState} from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, CircularProgress } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from "react-redux";
import { deletePost, getPosts } from "../../../../actions/postActions";
import { Link } from 'react-router-dom';

const Post = ({post}) => {

    const id = JSON.parse(localStorage.getItem("profile")).result._id
    const classes = useStyles();
    const dispatch = useDispatch()
    const [loading, setloading] = useState(false)

    const handleClick = (event) => {
        event.preventDefault();
        setloading(true);
        dispatch(deletePost(post._id));
        dispatch(getPosts(id))
    }


    return (
    <div>
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.document} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post?.createdAt).format("DD MMM, YYYY")}</Typography>
            </div>
            {/* <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => {}}><MoreHorizIcon fontSize="default" /></Button>
            </div> */}
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.address}</Typography>
            <div className={classes.details}>
                <Typography variant="h6" color="textSecondary" component="h2">{`${post.city}, ${post.state}`}</Typography>
            </div>
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">{post.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {
                    loading ? (
                            <CircularProgress/>
                    ):(
                    <Button size="small" color="primary" onClick={handleClick} ><DeleteIcon fontSize="small" /> 
                        Delete
                    </Button>
                    )
                }
            </CardActions>
        </Card>
    </div>
    );
}
export default Post;