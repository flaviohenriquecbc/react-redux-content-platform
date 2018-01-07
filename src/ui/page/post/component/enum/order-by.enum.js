const orderBy = [
    {type: 'timestamp', asc: false, label: 'Newest Post'},
    {type: 'timestamp', asc: true, label: 'Oldest Post'},
    {type: 'voteScore', asc: false, label: 'Highest Score'},
    {type: 'voteScore', asc: true, label: 'Lowest Score'}
];

export default orderBy;
