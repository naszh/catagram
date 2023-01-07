import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ColorRing } from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { links, X_API_KEY } from '../../../api/api';

import { CommentIcon, LikeIcon } from '../../../common/icon.styled';
import { fetchCats, setCats } from '../../../redux/reducer/catsSlice';
import { Cat } from '../../../redux/reducer/catsSlice.types';
import { AppDispatch, RootState } from '../../../redux/store';
import { ThemeContext } from '../../theme/themeProvider';
import {
  BlockHeader,
  BlockHeaderImg,
  BlockImg,
  PostBlock,
  BlockUser,
  PostIcons,
  PostCounter,
  PostDescription,
  PostComment,
} from './posts.styled';

function Items({ currentItems }: any) {
  const { theme } = useContext(ThemeContext);
  console.log(currentItems, 'currentItems');
  return (
    <>
      {currentItems &&
        currentItems.map((cat: Cat) => (
          <PostBlock key={uuidv4()} theme={theme}>
            <BlockHeader>
              <BlockHeaderImg src={cat.image_link} />
              <BlockUser>{cat.name.toLowerCase()}</BlockUser>
            </BlockHeader>
            <BlockImg src={cat.image_link} />
            <PostIcons>
              <LikeIcon />
              <CommentIcon />
            </PostIcons>
            <PostCounter>counter</PostCounter>
            <BlockUser>
              {cat.name.toLowerCase()}
              <PostDescription>origin#{cat.origin}</PostDescription>
            </BlockUser>
            <PostComment>add a comment</PostComment>
          </PostBlock>
        ))}
    </>
  );
}

export const Posts = ({ itemsPerPage }: any): any => {
  const items: any = useSelector((state: RootState) => state.cats.initArr);
  console.log(items, 'items');
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    dispatch(fetchCats())
      .then((data: any) => {
        setCurrentItems(data.payload.slice(itemOffset, endOffset));
        return data.payload;
      })
      .then((data: any) => setPageCount(Math.ceil(data.length / itemsPerPage)));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick: any = (event: any): any => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='< previous'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        // renderOnZeroPageCount={null}
      />
    </>
  );
};
