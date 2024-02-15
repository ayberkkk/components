import tw, { styled } from "twin.macro";

const BlogCard = styled.div`
  ${tw`rounded-lg relative overflow-hidden`}
  ${(props) => props.default_1 && tw`border w-[300px] h-[370px] shadow-sm`}
  ${(props) => props.default_2 && tw`w-[500px] lg:h-[370px] relative shadow-lg`}
  ${(props) => props.default_3 && tw`w-[300px] lg:h-[370px]`}
  ${(props) => props.default_4 && tw`border w-[600px] lg:h-[370px] shadow-lg`}
`;

export default BlogCard;
