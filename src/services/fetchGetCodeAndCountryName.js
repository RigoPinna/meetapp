

export const fetchGetCodeAndCountryName = async() => {
    try {
        const url = 'https://restcountries.com/v2/all';

        const resp = await fetch( url );
        const data = resp.json();
    
        return data;
    }catch( error) {
        return data;
    }
   
}
export const dataCountry = [
    {name:'AFG',
            alpha2Code:'AFG',
     callingCodes:['93']},
    {name:'ALB',
            alpha2Code:'ALB',
     callingCodes:['355']},
    {name:'DZA',
            alpha2Code:'DZA',
     callingCodes:['213']},
    {name:'ASM',
            alpha2Code:'ASM',
     callingCodes:['1684']},
    {name:'AND',
            alpha2Code:'AND',
     callingCodes:['376']},
    {name:'AGO',
            alpha2Code:'AGO',
     callingCodes:['244']},
    {name:'AIA',
            alpha2Code:'AIA',
     callingCodes:['1264']},
    {name:'ATA',
            alpha2Code:'ATA',
     callingCodes:['672']},
    {name:'ATG',
            alpha2Code:'ATG',
     callingCodes:['1268']},
    {name:'ARG',
            alpha2Code:'ARG',
     callingCodes:['54']},
    {name:'ARM',
            alpha2Code:'ARM',
     callingCodes:['374']},
    {name:'ABW',
            alpha2Code:'ABW',
     callingCodes:['297']},
    {name:'AUS',
            alpha2Code:'AUS',
     callingCodes:['61']},
    {name:'AUT',
            alpha2Code:'AUT',
     callingCodes:['43']},
    {name:'AZE',
            alpha2Code:'AZE',
     callingCodes:['994']},
    {name:'BHS',
            alpha2Code:'BHS',
     callingCodes:['1242']},
    {name:'BHR',
            alpha2Code:'BHR',
     callingCodes:['973']},
    {name:'BGD',
            alpha2Code:'BGD',
     callingCodes:['880']},
    {name:'BRB',
            alpha2Code:'BRB',
     callingCodes:['1246']},
    {name:'BLR',
            alpha2Code:'BLR',
     callingCodes:['375']},
    {name:'BEL',
            alpha2Code:'BEL',
     callingCodes:['32']},
    {name:'BLZ',
            alpha2Code:'BLZ',
     callingCodes:['501']},
    {name:'BEN',
            alpha2Code:'BEN',
     callingCodes:['229']},
    {name:'BMU',
            alpha2Code:'BMU',
     callingCodes:['1441']},
    {name:'BTN',
            alpha2Code:'BTN',
     callingCodes:['975']},
    {name:'BOL',
            alpha2Code:'BOL',
     callingCodes:['591']},
    {name:'BIH',
            alpha2Code:'BIH',
     callingCodes:['387']},
    {name:'BWA',
            alpha2Code:'BWA',
     callingCodes:['267']},
    {name:'BVT',
            alpha2Code:'BVT',
     callingCodes:['_55']},
    {name:'BRA',
            alpha2Code:'BRA',
     callingCodes:['55']},
    {name:'IOT',
            alpha2Code:'IOT',
     callingCodes:['1284']},
    {name:'BRN',
            alpha2Code:'BRN',
     callingCodes:['673']},
    {name:'BGR',
            alpha2Code:'BGR',
     callingCodes:['359']},
    {name:'BFA',
            alpha2Code:'BFA',
     callingCodes:['226']},
    {name:'BDI',
            alpha2Code:'BDI',
     callingCodes:['257']},
    {name:'KHM',
            alpha2Code:'KHM',
     callingCodes:['855']},
    {name:'CMR',
            alpha2Code:'CMR',
     callingCodes:['237']},
    {name:'CAN',
            alpha2Code:'CAN',
     callingCodes:['1'
  ]},  {name:'CPV',
        alpha2Code:'CPV',
   callingCodes:['238']},
    {name:'CYM',
            alpha2Code:'CYM',
     callingCodes:['1345']},
    {name:'CAF',
            alpha2Code:'CAF',
     callingCodes:['236']
},    {name:'TCD',
        alpha2Code:'TCD',
 callingCodes:['235']
},    {name:'CHL',
        alpha2Code:'CHL',
 callingCodes:['56']
 },   {name:'CHN',
        alpha2Code:'CHN',
  callingCodes:['86']
 },   {name:'CXR',
        alpha2Code:'CXR',
  callingCodes:['618']
},    {name:'CCK',
        alpha2Code:'CCK',
 callingCodes:['61']
 },   {name:'COL',
        alpha2Code:'COL',
  callingCodes:['57']
 },   {name:'COM',
        alpha2Code:'COM',
  callingCodes:['269']
},    {name:'COG',
        alpha2Code:'COG',
 callingCodes:['242']
},    {name:'COD',
        alpha2Code:'COD',
 callingCodes:['243']
},    {name:'COK',
        alpha2Code:'COK',
 callingCodes:['682']
},    {name:'CRI',
        alpha2Code:'CRI',
 callingCodes:['506']},
    {name:'HRV',
            alpha2Code:'HRV',
     callingCodes:['385']
},    {name:'CUB',
        alpha2Code:'CUB',
 callingCodes:['53']
 },   {name:'CYP',
        alpha2Code:'CYP',
  callingCodes:['357']
},    {name:'CZE',
        alpha2Code:'CZE',
 callingCodes:['420']
},    {name:'DNK',
        alpha2Code:'DNK',
 callingCodes:['45']
 },   {name:'DJI',
        alpha2Code:'DJI',
  callingCodes:['253']
},    {name:'DMA',
        alpha2Code:'DMA',
 callingCodes:['1767']},
    {name:'DOM',
            alpha2Code:'DOM',
     callingCodes:['1']
  },  {name:'ECU',
        alpha2Code:'ECU',
   callingCodes:['593']
},    {name:'EGY',
        alpha2Code:'EGY',
 callingCodes:['20']
 },   {name:'SLV',
        alpha2Code:'SLV',
  callingCodes:['503']
},    {name:'GNQ',
        alpha2Code:'GNQ',
 callingCodes:['240']
},    {name:'ERI',
        alpha2Code:'ERI',
 callingCodes:['291']
},    {name:'EST',
        alpha2Code:'EST',
 callingCodes:['372']
},    {name:'ETH',
        alpha2Code:'ETH',
 callingCodes:['251']
},    {name:'FLK',
        alpha2Code:'FLK',
 callingCodes:['500']
},    {name:'FRO',
        alpha2Code:'FRO',
 callingCodes:['298']
},    {name:'FJI',
        alpha2Code:'FJI',
 callingCodes:['679']
},    {name:'FIN',
        alpha2Code:'FIN',
 callingCodes:['358']
},    {name:'FRA',
        alpha2Code:'FRA',
 callingCodes:['33']
 },   {name:'GUF',
        alpha2Code:'GUF',
  callingCodes:['594']
},    {name:'PYF',
        alpha2Code:'PYF',
 callingCodes:['689']
},    {name:'GAB',
        alpha2Code:'GAB',
 callingCodes:['241']
},    {name:'GMB',
        alpha2Code:'GMB',
 callingCodes:['220']
},    {name:'GEO',
        alpha2Code:'GEO',
 callingCodes:['995']
},    {name:'DEU',
        alpha2Code:'DEU',
 callingCodes:['49']
 },   {name:'GHA',
        alpha2Code:'GHA',
  callingCodes:['233']
},    {name:'GIB',
        alpha2Code:'GIB',
 callingCodes:['350']
},    {name:'GRC',
        alpha2Code:'GRC',
 callingCodes:['30']
 },   {name:'GRL',
        alpha2Code:'GRL',
  callingCodes:['299']
},    {name:'GRD',
        alpha2Code:'GRD',
 callingCodes:['1473']},
    {name:'GLP',
            alpha2Code:'GLP',
     callingCodes:['590']
},    {name:'GUM',
        alpha2Code:'GUM',
 callingCodes:['1671']},
    {name:'GTM',
            alpha2Code:'GTM',
     callingCodes:['502']
},    {name:'GIN',
        alpha2Code:'GIN',
 callingCodes:['224']
},    {name:'GNB',
        alpha2Code:'GNB',
 callingCodes:['245']
},    {name:'GUY',
        alpha2Code:'GUY',
 callingCodes:['592']
},    {name:'HTI',
        alpha2Code:'HTI',
 callingCodes:['509']
},    {name:'HMD',
        alpha2Code:'HMD',
 callingCodes:['61']
 },   {name:'VAT',
        alpha2Code:'VAT',
  callingCodes:['3']
  },  {name:'HND',
        alpha2Code:'HND',
   callingCodes:['504']
},    {name:'HKG',
        alpha2Code:'HKG',
 callingCodes:['852']
},    {name:'HUN',
        alpha2Code:'HUN',
 callingCodes:['36']
 },   {name:'ISL',
        alpha2Code:'ISL',
  callingCodes:['354']
},    {name:'IND',
        alpha2Code:'IND',
 callingCodes:['91']
 },   {name:'IDN',
        alpha2Code:'IDN',
  callingCodes:['62']
 },   {name:'IRN',
        alpha2Code:'IRN',
  callingCodes:['98']
 },   {name:'IRQ',
        alpha2Code:'IRQ',
  callingCodes:['964']
},    {name:'IRL',
        alpha2Code:'IRL',
 callingCodes:['353']
},    {name:'ISR',
        alpha2Code:'ISR',
 callingCodes:['972']
},    {name:'ITA',
        alpha2Code:'ITA',
 callingCodes:['39']
 },   {name:'CIV',
        alpha2Code:'CIV',
  callingCodes:['225']
},    {name:'JAM',
        alpha2Code:'JAM',
 callingCodes:['1876']},
    {name:'JPN',
            alpha2Code:'JPN',
     callingCodes:['81']
 },   {name:'JOR',
        alpha2Code:'JOR',
  callingCodes:['962']
},    {name:'KAZ',
        alpha2Code:'KAZ',
 callingCodes:['7']
  },  {name:'KEN',
        alpha2Code:'KEN',
   callingCodes:['254']
},    {name:'KIR',
        alpha2Code:'KIR',
 callingCodes:['686']
},    {name:'PRK',
        alpha2Code:'PRK',
 callingCodes:['850']
},    {name:'KOR',
        alpha2Code:'KOR',
 callingCodes:['82']
 },   {name:'KWT',
        alpha2Code:'KWT',
  callingCodes:['965']
},    {name:'KGZ',
        alpha2Code:'KGZ',
 callingCodes:['7']
  },  {name:'LAO',
        alpha2Code:'LAO',
   callingCodes:['856']
},    {name:'LVA',
        alpha2Code:'LVA',
 callingCodes:['371']
},    {name:'LBN',
        alpha2Code:'LBN',
 callingCodes:['961']
},    {name:'LSO',
        alpha2Code:'LSO',
 callingCodes:['266']
},    {name:'LBR',
        alpha2Code:'LBR',
 callingCodes:['231']
},    {name:'LBY',
        alpha2Code:'LBY',
 callingCodes:['218']},
    {name:'LIE',
            alpha2Code:'LIE',
     callingCodes:['423']
},    {name:'LTU',
        alpha2Code:'LTU',
 callingCodes:['370']
},    {name:'LUX',
        alpha2Code:'LUX',
 callingCodes:['352']
},    {name:'MAC',
        alpha2Code:'MAC',
 callingCodes:['853']
},    {name:'MKD',
        alpha2Code:'MKD',
 callingCodes:['389']
},    {name:'MDG',
        alpha2Code:'MDG',
 callingCodes:['261']
},    {name:'MWI',
        alpha2Code:'MWI',
 callingCodes:['265']
},    {name:'MYS',
        alpha2Code:'MYS',
 callingCodes:['60']
 },   {name:'MDV',
        alpha2Code:'MDV',
  callingCodes:['960']
},    {name:'MLI',
        alpha2Code:'MLI',
 callingCodes:['223']
},    {name:'MLT',
        alpha2Code:'MLT',
 callingCodes:['356']
},    {name:'MHL',
        alpha2Code:'MHL',
 callingCodes:['692']
},    {name:'MTQ',
        alpha2Code:'MTQ',
 callingCodes:['596']
},    {name:'MRT',
        alpha2Code:'MRT',
 callingCodes:['222']
},    {name:'MUS',
        alpha2Code:'MUS',
 callingCodes:['230']
},    {name:'MYT',
        alpha2Code:'MYT',
 callingCodes:['262']
},    {name:'MEX',
        alpha2Code:'MEX',
 callingCodes:['52']
 },   {name:'FSM',
        alpha2Code:'FSM',
  callingCodes:['691']
},    {name:'MDA',
        alpha2Code:'MDA',
 callingCodes:['373']
},    {name:'MCO',
        alpha2Code:'MCO',
 callingCodes:['377']
},    {name:'MNG',
        alpha2Code:'MNG',
 callingCodes:['976']
},    {name:'MSR',
        alpha2Code:'MSR',
 callingCodes:['1664']},
    {name:'MAR',
            alpha2Code:'MAR',
     callingCodes:['212']
},    {name:'MOZ',
        alpha2Code:'MOZ',
 callingCodes:['258']
},    {name:'MMR',
        alpha2Code:'MMR',
 callingCodes:['95']
 },   {name:'NAM',
        alpha2Code:'NAM',
  callingCodes:['264']
},    {name:'NRU',
        alpha2Code:'NRU',
 callingCodes:['674']
},    {name:'NPL',
        alpha2Code:'NPL',
 callingCodes:['977']
},    {name:'NLD',
        alpha2Code:'NLD',
 callingCodes:['31']
 },   {name:'ANT',
        alpha2Code:'ANT',
  callingCodes:['599']
},    {name:'NCL',
        alpha2Code:'NCL',
 callingCodes:['687']
},    {name:'NZL',
        alpha2Code:'NZL',
 callingCodes:['64']
 },   {name:'NIC',
        alpha2Code:'NIC',
  callingCodes:['505']
},    {name:'NER',
        alpha2Code:'NER',
 callingCodes:['227']
},    {name:'NGA',
        alpha2Code:'NGA',
 callingCodes:['234']
},    {name:'NIU',
        alpha2Code:'NIU',
 callingCodes:['683']
},    {name:'NFK',
        alpha2Code:'NFK',
 callingCodes:['672']
},    {name:'MNP',
        alpha2Code:'MNP',
 callingCodes:['1670']},
    {name:'NOR',
            alpha2Code:'NOR',
     callingCodes:['47']
 },   {name:'OMN',
        alpha2Code:'OMN',
  callingCodes:['968']
},    {name:'PAK',
        alpha2Code:'PAK',
 callingCodes:['92']
 },   {name:'PLW',
        alpha2Code:'PLW',
  callingCodes:['680']
},    {name:'PSE',
        alpha2Code:'PSE',
 callingCodes:['970']
},    {name:'PAN',
        alpha2Code:'PAN',
 callingCodes:['507']
},    {name:'PNG',
        alpha2Code:'PNG',
 callingCodes:['675']
},    {name:'PRY',
        alpha2Code:'PRY',
 callingCodes:['595']
},    {name:'PER',
        alpha2Code:'PER',
 callingCodes:['51']
 },   {name:'PHL',
        alpha2Code:'PHL',
  callingCodes:['63']
 },   {name:'PCN',
        alpha2Code:'PCN',
  callingCodes:['870']
},    {name:'POL',
        alpha2Code:'POL',
 callingCodes:['48']
 },   {name:'PRT',
        alpha2Code:'PRT',
  callingCodes:['351']
},    {name:'PRI',
        alpha2Code:'PRI',
 callingCodes:['1']
  },  {name:'QAT',
        alpha2Code:'QAT',
   callingCodes:['974']
},    {name:'REU',
        alpha2Code:'REU',
 callingCodes:['262']
},    {name:'ROM',
        alpha2Code:'ROM',
 callingCodes:['40']
 },   {name:'RUS',
        alpha2Code:'RUS',
  callingCodes:['7']
  },  {name:'RWA',
        alpha2Code:'RWA',
   callingCodes:['250']
},    {name:'SHN',
        alpha2Code:'SHN',
 callingCodes:['290']
},    {name:'KNA',
        alpha2Code:'KNA',
 callingCodes:['1869']},
    {name:'LCA',
            alpha2Code:'LCA',
     callingCodes:['1758']},
    {name:'SPM',
            alpha2Code:'SPM',
     callingCodes:['508']
},    {name:'VCT',
        alpha2Code:'VCT',
 callingCodes:['1758']},
    {name:'WSM',
            alpha2Code:'WSM',
     callingCodes:['685']
},    {name:'SMR',
        alpha2Code:'SMR',
 callingCodes:['378']
},    {name:'STP',
        alpha2Code:'STP',
 callingCodes:['239']
},    {name:'SAU',
        alpha2Code:'SAU',
 callingCodes:['966']
},    {name:'SEN',
        alpha2Code:'SEN',
 callingCodes:['221']
},    {name:'SRB',
        alpha2Code:'SRB',
 callingCodes:['381']
},    {name:'SYC',
        alpha2Code:'SYC',
 callingCodes:['248']
},    {name:'SLE',
        alpha2Code:'SLE',
 callingCodes:['232']
},    {name:'SGP',
        alpha2Code:'SGP',
 callingCodes:['65']
 },   {name:'SVK',
        alpha2Code:'SVK',
  callingCodes:['421']
},    {name:'SVN',
        alpha2Code:'SVN',
 callingCodes:['386']
},    {name:'SLB',
        alpha2Code:'SLB',
 callingCodes:['677']
},    {name:'SOM',
        alpha2Code:'SOM',
 callingCodes:['252']
},    {name:'ZAF',
        alpha2Code:'ZAF',
 callingCodes:['27']
 },   {name:'SGS',
        alpha2Code:'SGS',
  callingCodes:['44']
 },   {name:'ESP',
        alpha2Code:'ESP',
  callingCodes:['34']
 },   {name:'LKA',
        alpha2Code:'LKA',
  callingCodes:['94']
 },   {name:'SDN',
        alpha2Code:'SDN',
  callingCodes:['249']
},    {name:'SUR',
        alpha2Code:'SUR',
 callingCodes:['597']
},    {name:'SJM',
        alpha2Code:'SJM',
 callingCodes:['47']
 },   {name:'SWZ',
        alpha2Code:'SWZ',
  callingCodes:['268']
},    {name:'SWE',
        alpha2Code:'SWE',
 callingCodes:['46']
 },   {name:'CHE',
        alpha2Code:'CHE',
  callingCodes:['41']
 },   {name:'SYR',
        alpha2Code:'SYR',
  callingCodes:['963']
},    {name:'TWN',
        alpha2Code:'TWN',
 callingCodes:['886']
},    {name:'TJK',
        alpha2Code:'TJK',
 callingCodes:['992']
},    {name:'TZA',
        alpha2Code:'TZA',
 callingCodes:['255']
},    {name:'THA',
        alpha2Code:'THA',
 callingCodes:['66']
 },   {name:'TLS',
        alpha2Code:'TLS',
  callingCodes:['670']
},    {name:'TGO',
        alpha2Code:'TGO',
 callingCodes:['228']
},    {name:'TKL',
        alpha2Code:'TKL',
 callingCodes:['690']
},    {name:'TON',
        alpha2Code:'TON',
 callingCodes:['676']
},    {name:'TTO',
        alpha2Code:'TTO',
 callingCodes:['1868']},
    {name:'TUN',
            alpha2Code:'TUN',
     callingCodes:['216']
},    {name:'TUR',
        alpha2Code:'TUR',
 callingCodes:['90']
 },   {name:'TKM',
        alpha2Code:'TKM',
  callingCodes:['993']
},    {name:'TCA',
        alpha2Code:'TCA',
 callingCodes:['1649']},
    {name:'TUV',
            alpha2Code:'TUV',
     callingCodes:['688']
},    {name:'UGA',
        alpha2Code:'UGA',
 callingCodes:['256']
},    {name:'UKR',
        alpha2Code:'UKR',
 callingCodes:['380']
},    {name:'ARE',
        alpha2Code:'ARE',
 callingCodes:['971']
},    {name:'GBR',
        alpha2Code:'GBR',
 callingCodes:['44']
 },   {name:'USA',
        alpha2Code:'USA',
  callingCodes:['1']
  },  {name:'UMI',
        alpha2Code:'UMI',
   callingCodes:['1340']},
    {name:'URY',
            alpha2Code:'URY',
     callingCodes:['598']
},    {name:'UZB',
        alpha2Code:'UZB',
 callingCodes:['998']
},    {name:'VUT',
        alpha2Code:'VUT',
 callingCodes:['678']
},    {name:'VEN',
        alpha2Code:'VEN',
 callingCodes:['58']
 },   {name:'VNM',
        alpha2Code:'VNM',
  callingCodes:['84']
 },   {name:'VGB',
        alpha2Code:'VGB',
  callingCodes:['1284']},
    {name:'VIR',
            alpha2Code:'VIR',
     callingCodes:['1340']},
    {name:'WLF',
            alpha2Code:'WLF',
     callingCodes:['681']
},    {name:'YEM',
        alpha2Code:'YEM',
 callingCodes:['260']
},    {name:'ZMB',
        alpha2Code:'ZMB',
 callingCodes:['260']
},]