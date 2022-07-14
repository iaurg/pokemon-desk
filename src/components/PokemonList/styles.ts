import styled from 'styled-components'

export const Wrapper = styled.main`
  margin: 2rem auto;
`
export const Loading = styled.div``

export const Error = styled.div``

export const ListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`

export const LoadingCard = styled.div`
  background-color: #fff;
  color: #000;
  padding: 1.5rem 2rem;
  text-align: left;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
  width: fit-content;
  display: flex;
  transition: all 0.2s ease-in-out;
  align-items: center;
  margin: 1rem;
  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  width: 220px;
  height: 80px;
  justify-content: space-between;
`
