const Browser = ({ endSearch, onChange }) => {

    return (
      <div>
        <h5>Search:</h5>
        <input type="text" placeholder="Type your search..." value={endSearch} onChange={onChange} />
      </div>
    )
  }

  export default Browser
