import styled from "styled-components";
const Details=({status,premiered,network})=>{
    return(
        <DetailsWrapper>
           <p>
           Status: {status}
           </p>
           <p>
            premiered {premiered} {!!network && `on ${network.name}`}
           </p>

        </DetailsWrapper>
    )
}
export default Details

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;