import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 3%;
`;

export const CategoryArea = styled.div`
    margin-top: 1.5%;
    font-weight: 500;
`;
export const CategoryList = styled.div`
    display: flex;
    margin-top: 0.4%;
`;

export const ProductArea = styled.div`
    margin: 1.5% 0;
`;
export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

@media screen and (max-width: 1220px) {
    grid-template-columns: repeat(2, 1fr)
}
`;



export const ProductPagination = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
export const ProductPagItem = styled.div`
    background-color: ${props => props.active === props.current ? "#EBF582" : "#ffd700"} ;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
`;