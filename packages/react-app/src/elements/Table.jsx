import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Tx',
    dataIndex: 'tx',
    key: 'tx',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Amount Harvested Now',
    dataIndex: 'amountHarvestedNow',
    key: 'amountHarvestedNow',
  },
  {
    title: 'amountHarvestedTotal',
    dataIndex: 'amountHarvestedTotal',
    key: 'amountHarvestedTotal',
  },
  {
    title: 'amountHarvestedTotal',
    dataIndex: 'amountHarvestedTotal',
    key: 'amountHarvestedTotal',
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
    amountHarvestedNow: '',
    amountHarvestedTotal: '',
    amountHarvestedPrevious: '',
    amountRewardedNow: '',
    amountRewardedTotal: '',
    amountRewardedPrevious: '',
    effectiveAPRNow: '',
    effectiveAPRTotal: '',
    effectiveAPRPrevious: '',
    
    amountDepositedTotal: '',
    amountBalanceNow: '',
    
    dateFirstJoined: '',
    dateLastHarvested: '',
    quantityOfHarvests: '',
    tags: ['nice', 'developer'],
  },
];

export default () => <Table columns={columns} dataSource={data} />;