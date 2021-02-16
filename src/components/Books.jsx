import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.data.books);
  console.log(books);
  return (
    <div>
        {books.length > 0
          ? (
            <div className='booksPage'>
            {books.map((book) => (
              <div key={book.id} className='booksItem'>
                <div>
                  <img src="http://via.placeholder.com/250x150" />
                </div>
                <div>
                  {book.name}
                </div>
              </div>
            ))}
            </div>
          ) : (
            null
          )}
    </div>
  );
};

export default Books;
