import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const materials = [
  {
    title: "Material 1",
    id: "1",
  },
  {
    title: "Material 2",
    id: "2",
  },
];

const Materials = () => {
  // const [isModalVisible, setModalVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const showModalHandler = () => {
    searchParams.set("modal", "addNewMaterial");
    setSearchParams(searchParams);
  };

  const closeModalHandler = () => {
    searchParams.delete("modal");
    setSearchParams(searchParams);
  };

  console.log([...searchParams.entries()]);

  return (
    <div>
      {searchParams.has("modal") ? <Modal onClose={closeModalHandler} /> : null}
      <div>
        <BUtton onClick={showModalHandler}>Add new material</BUtton>
      </div>
      <Ul>
        {materials.map((item) => (
          <Li key={item.id}>
            {item.title}
            <Button onClick={() => navigate(`${item.id}/detail`)}>
              Detail
            </Button>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default Materials;

const Ul = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
  width: 600px;
`;

const Li = styled.li`
  background-color: #7d4444;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 10px;
  justify-content: space-between;
`;

const BUtton = styled.button`
  background-color: #deac4e;
  padding: 10px 30px;
  color: #f3efef;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background-color: #d4b478;
  }
`;
