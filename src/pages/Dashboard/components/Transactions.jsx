import {
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import { Fragment, useEffect, useState } from "react";
import { fetchTransactions } from "../../../api/mockApi";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchTransactions();
      setTransactions(data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={4} maxH="380px" overflowY="auto" pr="2">
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          transactions.map((transaction, i) => (
            <Fragment key={transaction.id}>
              {i !== 0 && <Divider />}
              <Flex gap="4">
                <Grid
                  placeItems="center"
                  bg="black.5"
                  boxSize={10}
                  borderRadius="full"
                >
                  <Icon
                    as={transaction.type ? BsCurrencyRupee : FaBtc}
                  />
                </Grid>
                <Flex justify="space-between" w="full">
                  <Stack spacing={0}>
                    <Text textStyle="h6">
                      {transaction.type ? "INR Deposit" : "BTC Sell"}
                    </Text>
                    <Text fontSize="sm" color="black.40">
                      2022-06-09 7:06 PM
                    </Text>
                  </Stack>
                  <Text textStyle="h6">
                    {transaction.type ? "+" : "-"} {transaction.amount}
                  </Text>
                </Flex>
              </Flex>
            </Fragment>
          ))
        )}
      </Stack>
      <Button w="full" mt="6" colorScheme="gray">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
