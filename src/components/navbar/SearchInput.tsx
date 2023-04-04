import Link from 'next/link'
import React from 'react'

const SearchInput = () => {
  return (
    <div>
        <div className="relative hidden w-full max-w-xl lg:block">
        <div className="search">
            <svg
                className="search__icon search__icon--magnify"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                />
            </svg>
            <input
                type="text"
                placeholder="Type to search"
                className="search__input"
                v-model="query"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="search__icon search__icon--x"
                viewBox="0 0 20 20"
                fill="currentColor"
                // onClick="$emit('close')"
            >
                <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>

        <div
            v-if="results && query"
            className="absolute left-0 flex flex-col w-full max-h-screen p-2 space-y-4 overflow-y-auto bg-white rounded-bl rounded-br shadow-md dark:bg-slate-800 top-full"
        >
            <Link
                v-for="result in results"
                key="result.result"
                href="{
                    name: 'username-slug',
                    params: {
                        username: result.user.username,
                        slug: result.slug,
                    },
                }"
                className="hover:opacity-80"
            >
                <p
                    v-if="result._highlightResult.title"
                    className="text-lg text-dark title"
                    v-html="result._highlightResult.title.value"
                ></p>
                {/* <p className="text-dark-secondary">@{{ result.user.username }}</p> */}
            </Link>
        </div>
    </div >
    </div>
  )
}

export default SearchInput
