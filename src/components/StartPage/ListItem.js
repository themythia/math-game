const ListItem = ({ text, value }) => {
  return (
    <li className='flex flex-row justify-center text-64 mb-[47px] last:mb-0'>
      <p className='mr-2'>{text}</p>
      <p>{value}</p>
    </li>
  );
};
export default ListItem;
