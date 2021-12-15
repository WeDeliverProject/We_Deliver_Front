import React from "react";
import styled from "styled-components";
import {Rating} from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled as style } from '@mui/material/styles';

const Wrapper = styled.div`
  display: flex;
  border-top: 1px solid #8DD6FF;
  border-bottom: 1px solid #8DD6FF;
  width: 800px;
  height: 150px;
  text-align: center;
  margin-top: 40px;
  margin-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Detail = styled.div`
    margin-left: 115px;
    margin-top: 15px;
`

const DetailScore = styled.div`
    font-family: Roboto;
    font-size: 40px;
    font-weight: bold;
`

const Scores = styled.div`
    margin-left: 50px;
`

const Score = styled.div`
    font-weight: bold;
`

const ScoreDetail = styled.div`
    display: flex;
    width:400px;
    margin-bottom: 3px;
`

const ReviewScore = () => {

//   const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);
  const BorderLinearProgress = style(LinearProgress)(({ theme }) => ({
    height: "10px",
    borderRadius: "5px",
    width: "360px",
    margin: "7px 0 0 10px",
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#8DD6FF' : '#308fe8',
    },
  }));

  return (
        <Wrapper>
            <Detail>
                <DetailScore>4.85</DetailScore>
                <Rating name="half-rating-read" value={4.85} precision={0.05} style={{color : "#FAFF00"}} readOnly />
            </Detail>
            <Scores>
                <ScoreDetail>
                    <Score>5점</Score>
                    <BorderLinearProgress variant="determinate" value={90} />
                </ScoreDetail>
                <ScoreDetail>
                    <Score>4점</Score>
                    <BorderLinearProgress variant="determinate" value={70} />
                </ScoreDetail>
                <ScoreDetail>
                    <Score>3점</Score>
                    <BorderLinearProgress variant="determinate" value={30} />
                </ScoreDetail>
                <ScoreDetail>
                    <Score>2점</Score>
                    <BorderLinearProgress variant="determinate" value={10} />
                </ScoreDetail>
                <ScoreDetail>
                    <Score>1점</Score>
                    <BorderLinearProgress variant="determinate" value={0} />
                </ScoreDetail>
            </Scores>
        </Wrapper>
    );
};

export default ReviewScore;
