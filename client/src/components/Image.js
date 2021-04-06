import React from  'react';
import admin from "../Images/admin.svg";
import user from "../Images/user.svg";
import password from "../Images/password.svg";
import documents from "../Images/documents.svg";
import post from "../Images/post.svg"

const Image = ({ name }) => {

    let imgSrc;

    switch (name) {
        case "admin":
            imgSrc = admin;
            break;
        case "user":
            imgSrc = user;
            break;
        case "documents":
            imgSrc = documents;
            break;
        case "password":
            imgSrc = password;
            break;
        case "post":
            imgSrc = post;
            break;

        default: imgSrc = "";
    }
    return (
        <>
            <img src={imgSrc} alt={name[0].toUpperCase() + name.substring(1)} />
            <h1 className="lead"><b>{name[0].toUpperCase() + name.substring(1)}</b></h1>
        </>
    );
}

export default Image;