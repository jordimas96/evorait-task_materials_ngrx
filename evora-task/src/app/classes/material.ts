export class Material {

    // I keep the variables in uppercase to simplify the code //
    constructor(
        public id,
        public Material,
        public Quantity: number,
        public DescTxt,
        public CustomerPrice,
        public CustomerCurrency,
        public RepairPrice,
        public RepairCurrency,
        public Available: number,
        public ExtUnit,
        public MatStatus,
        public StorageLoc,
        public StorageLocDesc,
        public NDFQuote,
        public NDFCounter,
        public TSPercentage,
        public TSPercentageCounter,
    ) { }



    // public book(num) {
    //     this.Quantity += num;
    //     this.Available -= num;
    // }

    // "Material": "6396734",
    // "Quantity": "2",
    // "DescTxt": "Material 1",
    // "CustomerPrice": "40000.000",
    // "CustomerCurrency": "EUR",
    // "RepairPrice": "9592.000",
    // "RepairCurrency": "EUR",
    // "Available": "16093",
    // "ExtUnit": "ST",
    // "MatStatus": "",
    // "StorageLoc": "1000",
    // "StorageLocDesc": "10032476",
    // "NDFQuote": "002",
    // "NDFCounter": "000001",
    // "TSPercentage": "016",
    // "TSPercentageCounter": "000001"
}
