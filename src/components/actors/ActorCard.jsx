import { SearchCard,SearchImgWrapper} from "../common/SearchCard"
const ActorCard=({name,image,country,birthday,deathday,gender})=>{
    return (
        <SearchCard>
        <SearchImgWrapper>
            <img src={image} alt={name}/>
        </SearchImgWrapper>
        <h1>
           {name} {!!gender && `(${gender})`} {/* !! for take the boolean value from gender coz && works on boolen value */}
        </h1>
        <p>{country?`Come from ${country}`:'No country known'}</p>
        {!! birthday && <p>Born {birthday}</p>}
        <p>{ deathday ?`Died ${deathday}`:'Alive'} </p>
        </SearchCard>
    )
}
export default ActorCard