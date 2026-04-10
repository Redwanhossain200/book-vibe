import React, { useContext } from 'react'
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/listedReadList';
import ListedWishList from '../../components/listedBooks/listedWishList';

const Books = () => {

  const { readList, WishList } = useContext(BookContext)
  console.log(readList, WishList, "bookContext");


  return (
    <div className='container mx-auto my-3'>
      Read list: {readList.length}
      Wish list: {WishList.length}

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList />
        </TabPanel>
        <TabPanel>
          <ListedWishList />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Books