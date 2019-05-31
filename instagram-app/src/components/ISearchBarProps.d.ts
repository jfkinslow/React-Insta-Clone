interface ISearchBarProps {
    parent: Object;
    searchChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}