import './SearchBar.css'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Search Projects"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}