import tw, { styled } from "twin.macro";

const Button = styled.button`
  ${tw`text-sm font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in`}
  ${(props) =>
    props.default_1 && tw`bg-[#800080] text-white hover:bg-[#900080]`}
  ${(props) =>
    props.default_2 &&
    tw`bg-[#800080]/20 text-[#800080] hover:bg-[#800080] hover:text-white`}
  ${(props) =>
    props.default_3 &&
    tw`border border-[#800080] text-[#800080] hover:bg-[#800080]/20`}
  ${(props) =>
    props.default_4 && tw`bg-transparent text-[#800080] hover:bg-[#800080]/20`}
  ${(props) => props.default_5 && tw`bg-gray-100 text-gray-400`}
`;

export default Button;
