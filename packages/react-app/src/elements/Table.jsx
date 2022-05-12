import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Tx',
    dataIndex: 'tx',
    key: 'tx',
    render: text => <a>{text}</a>,
  },
  {
    title: 'amountHarvestedNow',
    dataIndex: 'amountHarvestedNow',
    key: 'amountHarvestedNow',
  },
  {
    title: 'amountHarvestedTotal',
    dataIndex: 'amountHarvestedTotal',
    key: 'amountHarvestedTotal',
  },
  {
    title: 'amountHarvestedPrevious',
    dataIndex: 'amountHarvestedPrevious',
    key: 'amountHarvestedPrevious',
  },
  {
    title: 'amountRewardedNow',
    dataIndex: 'amountRewardedNow',
    key: 'amountRewardedNow',
  },
  {
    title: 'amountHarvestedTotal',
    dataIndex: 'amountHarvestedTotal',
    key: 'amountHarvestedTotal',
  },
  {
    title: 'amountRewardedPrevious',
    dataIndex: 'amountRewardedPrevious',
    key: 'amountRewardedPrevious',
  },
  {
    title: 'effectiveAPRNow',
    dataIndex: 'effectiveAPRNow',
    key: 'effectiveAPRNow',
  },
  {
    title: 'effectiveAPRTotal',
    dataIndex: 'effectiveAPRTotal',
    key: 'effectiveAPRTotal',
  },
  {
    title: 'effectiveAPRPrevious',
    dataIndex: 'effectiveAPRPrevious',
    key: 'effectiveAPRPrevious',
  },
  {
    title: 'amountDepositedTotal',
    dataIndex: 'amountDepositedTotal',
    key: 'amountDepositedTotal',
  },
  {
    title: 'amountBalanceNow',
    dataIndex: 'amountBalanceNow',
    key: 'amountBalanceNow',
  },
  {
    title: 'dateFirstJoined',
    dataIndex: 'dateFirstJoined',
    key: 'dateFirstJoined',
  },
  {
    title: 'dateLastHarvested',
    dataIndex: 'dateLastHarvested',
    key: 'dateLastHarvested',
  },
  {
    title: 'quantityOfHarvests',
    dataIndex: 'quantityOfHarvests',
    key: 'quantityOfHarvests',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    tx: '0xabe7eed10dddfdd86e3422bc648cb45f6648f537fd707d41399fe4047e770316',
    amountHarvestedNow: '0.02',
    amountHarvestedTotal: '15.2',
    amountHarvestedPrevious: '15.0',
    amountRewardedNow: '0.13',
    amountRewardedTotal: '0.20',
    amountRewardedPrevious: '0.7',
    effectiveAPRNow: '25%',
    effectiveAPRTotal: '19%',
    effectiveAPRPrevious: '12%',
    
    amountDepositedTotal: '5000',
    amountBalanceNow: '5015.2',
    
    dateFirstJoined: '24.2.2022.',
    dateLastHarvested: '11.5.2022.',
    quantityOfHarvests: '',
    tags: ['nice', 'developer'],
  },
];

export default () => <Table columns={columns} dataSource={data} size="small"/>;