import React from "react";
import { PaginationProps } from "../../interfaces/paginationInt";

const Pagination = ({
  currentPage,
  setCurrentPage,
  length,
  perPage,
}: PaginationProps) => {
  const paginate = (
    number: number,
    addition: number,
    page: number,
    type: boolean
  ) => {
    return (
      (type ? currentPage > number : currentPage < number) && (
        <button
          className="images-container__pagination__button"
          onClick={() => setCurrentPage(currentPage + addition)}
        >
          {currentPage + page}
        </button>
      )
    );
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex justify-center items-center gap-[10px] text-[#8ab4f8]">
        <button
          className="images-container__pagination__button"
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>

        {currentPage > 3 && <p>...</p>}

        {Math.floor(length / perPage) > 2 && paginate(3, -2, -2, true)}
        {Math.floor(length / perPage) > 1 && paginate(2, -1, -1, true)}

        {Math.floor(length / perPage) > 2 &&
          currentPage > 1 &&
          currentPage < Math.floor(length / perPage) && (
            <button
              className="images-container__pagination__button"
              onClick={() => setCurrentPage(currentPage)}
            >
              {currentPage}
            </button>
          )}

        {paginate(Math.floor(length / perPage) - 2, 1, 1, false)}
        {paginate(Math.floor(length / perPage) - 3, 2, 2, false)}

        {currentPage < Math.floor(length / perPage) - 2 && <p>...</p>}

        {Math.floor(length / perPage) > 1 && (
          <button
            className="images-container__pagination__button"
            onClick={() => setCurrentPage(Math.floor(length / perPage))}
          >
            {Math.floor(length / perPage)}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
