import './scoreCircle.css'

export default function ScoreCircle({currentScore=1 , maxScore=1}){
    return <div className="scoreCircle">
        <p>{currentScore} / {maxScore}</p>
    </div>
}
