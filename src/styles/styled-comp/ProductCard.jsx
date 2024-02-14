import tw, { styled } from "twin.macro";

const ProductCard = styled.div`
  ${tw`w-full h-full relative overflow-hidden`}
  ${(props) => props.default_1 && tw`w-80 border rounded-lg shadow-lg`}
  ${(props) => props.default_2 && tw`w-80 border rounded shadow`}
  ${(props) => props.default_3 && tw`w-[340px] border rounded-lg shadow`}
`;

export default ProductCard;
