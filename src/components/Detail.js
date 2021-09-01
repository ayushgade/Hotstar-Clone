import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import db from '../firebase';
import Movies from './Movies';

function Details() {
    const { id } = useParams();//it will save nin parameter
    const [ movie, setMovie] = useState()//useState is foe single components
    
    useEffect(() => {
        // Grab the movies info from DB
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                //save the movie data
                setMovie(doc.data());
            }else {
                //redirect to home page
            }
        })
    }, [id])// this [] empty bracket means call above funtionnality whenever you load the component

    return (
        <Container>
            {movie && (
                <>
                <Background>
                <img src={movie.backgroundImg} />
            </Background>
            <ImageTitle>
                <img src={movie.titleImg} />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                     {movie.subTitle}      
            </SubTitle>
            <Description>
                {movie.description}
            </Description>
            </>
            )}
            
        </Container>
    )
}
export default Details

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: 0.7;

    img{
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 30vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 60px;
    margin-left: 17px;
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 17px;
`
const PlayButton = styled.button`
    border-radius: 4px;
    display: flex;
    align-items: center;  
    border: none;
    font-size: 13px;
    background: rgb(249, 249, 249);
    margin-right: 22px;
    padding: 0 24px;
    height: 56px;
    cursor: pointer;
    letter-spacing: 1.8px;

    &:hover{
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0 , 0, 0.3);
    color: white;
    border: 1px solid white;
    text-transform: uppercase;
    
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
       span {
           font-size: 30px;
           color: white;
       }
`
const GroupWatchButton = styled(AddButton)`
       background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
       margin-top: 26px;
       font-size: 17px;
       margin-left: 17px;
`
const Description = styled.div`
       margin-top: 16px;
       line-height: 1.4;
       max-width: 670px;
       font-size: 18px;
       margin-left: 17px;
`