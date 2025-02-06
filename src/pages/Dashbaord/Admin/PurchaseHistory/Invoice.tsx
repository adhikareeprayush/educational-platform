/* eslint-disable @typescript-eslint/no-explicit-any */
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { TOrders } from './PurchaseHistory';
import logo from '../../../../assets/Images/pm-gurukul.png';
import { formatDate } from '../../../../utils/formatDate';

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12, position: 'relative' },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  logo: { width: 180, height: 60 },
  address: { textAlign: 'right', fontSize: 10 },
  section: { marginBottom: 10, backgroundColor: '#F2F2F2', padding: 8, borderRadius: 6 },
  section2: { marginBottom: 10 },
  boldText: { fontWeight: 'bold', color: 'black' }, // Black bold titles
  normalText: { color: '#4F4F4F' }, // Gray normal text
  table: { width: '100%', marginTop: 10, borderWidth: 1, borderColor: '#ccc' },
  tableRow: {
    borderRight: 2,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  rowFontSize: {
    fontSize: 10
  },
  tableCell: { flex: 1, padding: 5, textAlign: 'center' },
  cellWithBorder: {
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  tableHeader: { backgroundColor: '#f2f2f2', fontWeight: 'bold' },
  declarationRow: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 10,
    textAlign: 'center',
  },
  footerDetails: { marginTop: 20, alignItems: 'center' },
  clickableLink: {
    textAlign: 'center',
    fontSize: 10,
    color: 'blue',
    textDecoration: 'underline',
    position: 'absolute',
    bottom: 10,
    left: 30,
  },
  statusCard: {
    backgroundColor: '#f21313',
    color: 'white',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontSize: 8,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

const Invoice = ({ order }: { order: TOrders }) => {
  if (!order || !order._id) {
    return <Text>Invalid Order</Text>;
  }

  return (
    <Document>
      <Page style={styles.page}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Image src={logo} style={styles.logo} />
          <View style={styles.address}>
            <Text>BIZGURUKUL PRIVATE LIMITED</Text>
            <Text>Regd. Add: A-26, SECOND FLOOR,</Text>
            <Text>SECTOR-16, Noida,</Text>
            <Text>Gautam Buddha Nagar- 201301,</Text>
            <Text>Uttar Pradesh, India</Text>
            <Text>GSTIN: 09AAJCB0091Q1Z6</Text>
            <Text>State Name: Delhi, Code: 07</Text>
            <Text>PAN: AAJCB0091Q</Text>
          </View>
        </View>

        {/* Invoice Details Section */}
        <View style={styles.section}>
          <Text>
            <Text style={styles.boldText}>Invoice#:</Text>
            <Text style={styles.normalText}> {order._id}</Text>
          </Text>
          <Text>
            <Text style={styles.boldText}>Invoice Date:</Text>
            <Text style={styles.normalText}> {formatDate(order.createdAt)}</Text>
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.boldText}>Status:</Text>
            <Text style={styles.statusCard}>PAID</Text>
          </View>
        </View>

        {/* Invoiced To Section */}
        <View style={styles.section2}>
          <Text style={styles.boldText}>Invoiced To:</Text>
          <Text>
            <Text style={styles.boldText}>Name:</Text>
            <Text style={styles.normalText}> {order?.user?.full_name}</Text>
          </Text>
          <Text>
            <Text style={styles.boldText}>Mobile Number:</Text>
            <Text style={styles.normalText}> {order?.user?.mobileNumber}</Text>
          </Text>
        </View>

        {/* Course Table */}
        {/* Course Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCell, styles.cellWithBorder]}>Description</Text>
            <Text style={[styles.tableCell, styles.cellWithBorder]}>Qty</Text>
            <Text style={[styles.tableCell, styles.cellWithBorder]}>HSN/SAC</Text>
            <Text style={styles.tableCell}>Amount</Text>
          </View>

          {/* Course Details */}
          <View style={[styles.tableRow, styles.rowFontSize]}>
            <Text style={[styles.tableCell, styles.cellWithBorder]}>Marketing Mastery</Text>
            <Text style={[styles.tableCell, styles.cellWithBorder]}>1</Text>
            <Text style={[styles.tableCell, styles.cellWithBorder]}>999293</Text>
            <Text style={styles.tableCell}>1499</Text>
          </View>


          {/* Subtotal */}
          <View style={[styles.tableRow, styles.rowFontSize]}>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={[styles.tableCell, styles.cellWithBorder, { textAlign: 'right', fontWeight: 'bold' }]}>Sub Total:</Text>
            <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>1270.34</Text>
          </View>

          {/* Tax Row */}
          <View style={[styles.tableRow, styles.rowFontSize]}>
            <Text style={[styles.tableCell, styles.cellWithBorder, { fontWeight: 'bold' }]}>Tax 19%:</Text>
            <Text style={[styles.tableCell, styles.cellWithBorder]}>CGST: 9%</Text>
            <Text style={[styles.tableCell, styles.cellWithBorder]}>CGST Amt: 114.33</Text>
            <Text style={[styles.tableCell, styles.cellWithBorder, { fontWeight: 'bold' }]}>12312</Text>
          </View>


          {/* Total */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { textAlign: 'right' }]}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={[styles.tableCell, { textAlign: 'right', fontWeight: 'bold' }]}>Total:</Text>
            <Text style={[styles.tableCell, { fontWeight: 'bold' }]}>1499</Text>
          </View>
        </View>

        {/* Declaration Section */}
        <View style={styles.table}>
          <Text style={styles.declarationRow}>
            Declaration: We declare that this invoice shows the actual price of the goods/services
            described and that all particulars are true and correct.
          </Text>
          <Text style={[styles.declarationRow, { fontWeight: 'bold' }]}>
            This is a Computer Generated Invoice No Signature Required.
          </Text>
        </View>

        {/* Footer Section */}
        <Text style={styles.clickableLink}>www.pmgurukul.com</Text>
        <View style={styles.footerDetails}>
          <Text>Generated on {new Date().toLocaleString()}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
