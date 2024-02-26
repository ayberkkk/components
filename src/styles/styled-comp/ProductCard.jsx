import tw, { styled } from "twin.macro";

const ProductCard = styled.div`
  ${tw`w-full h-full relative overflow-hidden cursor-pointer`}
  ${(props) => props.default_1 && tw`w-80 border rounded-lg shadow-lg`}
  ${(props) => props.default_2 && tw`w-80 h-[470px] border rounded-xl shadow-xl`}
  ${(props) => props.default_3 && tw`w-[340px] border rounded-lg shadow`}
  ${(props) => props.default_4 && tw`w-[340px] border rounded-lg shadow`}
  ${(props) => props.default_5 && tw`w-[260px] mt-3`}
`;

export default ProductCard;
