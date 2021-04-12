let country_count = [
    ['Country', 'Touchdowns'],
    ['Afghanistan', 0], //	AF
    ['Åland Islands', 0], //	AX
    ['Albania', 0], //	AL
    ['Algeria', 0], //	DZ
    ['American Samoa', 0], //	AS
    ['Andorra', 0], //	AD
    ['Angola', 0], //	AO
    ['Anguilla', 0], //	AI
    ['Antarctica', 0], //	AQ
    ['Antigua and Barbuda', 0], //	AG
    ['Argentina', 3], //	AR
    ['Armenia', 0], //	AM
    ['Aruba', 0], //	AW
    ['Australia', 0], //	AU
    ['Austria', 0], //	AT
    ['Azerbaijan', 0], //	AZ
    ['Bahamas', 0], //	BS
    ['Bahrain', 0], //	BH
    ['Bangladesh', 0], //	BD
    ['Barbados', 0], //	BB
    ['Belarus', 0], //	BY
    ['Belgium', 0], //	BE
    ['Belize', 0], //	BZ
    ['Benin', 0], //	BJ
    ['Bermuda', 0], //	BM
    ['Bhutan', 0], //	BT
    ['Bolivia', 1], //	BO
    ['Bolivia (Plurinational State of)', 0], //	BO
    ['Bonaire, Sint Eustatius and Saba', 0], //	BQ
    ['Bosnia and Herzegovina', 0], //	BA
    ['Botswana', 0], //	BW
    ['Bouvet Island', 0], //	BV
    ['Brazil', 3], //	BR
    ['British Indian Ocean Territory', 0], //	IO
    ['Brunei Darussalam', 0], //	BN
    ['Bulgaria', 0], //	BG
    ['Burkina Faso', 0], //	BF
    ['Burundi', 0], //	BI
    ['Cabo Verde', 0], //	CV
    ['Cambodia', 0], //	KH
    ['Cameroon', 0], //	CM
    ['Canada', 1], //	CA
    ['Cayman Islands', 0], //	KY
    ['Central African Republic', 0], //	CF
    ['Chad', 0], //	TD
    ['Chile', 0], //	CL
    ['China', 0], //	CN
    ['Christmas Island', 0], //	CX
    ['Cocos (Keeling) Islands', 0], //	CC
    ['Colombia', 1], //	CO
    ['Comoros', 0], //	KM
    ['Republic of the Congo', 0], //	CG
    ['Democratic Republic of the Congo', 0], //	CD
    ['Congo (Democratic Republic of the)', 0], //	CD
    ['Cook Islands', 0], //	CK
    ['Costa Rica', 0], //	CR
    ['Ivory Coast', 0], //	CI
    ['Côte d\'Ivoire', 0], //	CI
    ['Croatia', 0], //	HR
    ['Cuba', 0], //	CU
    ['Curaçao', 0], //	CW
    ['Cyprus', 0], //	CY
    ['Czech Republic', 0], //	CZ
    ['Czechia', 0], //	CZ
    ['Denmark', 0], //	DK
    ['Djibouti', 0], //	DJ
    ['Dominica', 0], //	DM
    ['Dominican Republic', 0], //	DO
    ['Ecuador', 0], //	EC
    ['Egypt', 0], //	EG
    ['El Salvador', 0], //	SV
    ['Equatorial Guinea', 0], //	GQ
    ['Eritrea', 0], //	ER
    ['Estonia', 0], //	EE
    ['Ethiopia', 0], //	ET
    ['Falkland Islands (Malvinas)', 0], //	FK
    ['Faroe Islands', 0], //	FO
    ['Fiji', 0], //	FJ
    ['Finland', 0], //	FI
    ['France', 0], //	FR
    ['French Guiana', 0], //	GF
    ['French Polynesia', 0], //	PF
    ['French Southern Territories', 0], //	TF
    ['Gabon', 0], //	GA
    ['Gambia', 0], //	GM
    ['Georgia', 0], //	GE
    ['Germany', 0], //	DE
    ['Ghana', 0], //	GH
    ['Gibraltar', 0], //	GI
    ['Greece', 0], //	GR
    ['Greenland', 0], //	GL
    ['Grenada', 0], //	GD
    ['Guadeloupe', 0], //	GP
    ['Guam', 0], //	GU
    ['Guatemala', 0], //	GT
    ['Guernsey', 0], //	GG
    ['Guinea', 0], //	GN
    ['Guinea-Bissau', 0], //	GW
    ['Guyana', 0], //	GY
    ['Haiti', 0], //	HT
    ['Heard Island and McDonald Islands', 0], //	HM
    ['Holy See', 0], //	VA
    ['Honduras', 0], //	HN
    ['Hong Kong', 0], //	HK
    ['Hungary', 0], //	HU
    ['Iceland', 0], //	IS
    ['India', 0], //	IN
    ['Indonesia', 0], //	ID
    ['Iran', 0], //	IR
    ['Iran (Islamic Republic of)', 0], //	IR
    ['Iraq', 0], //	IQ
    ['Ireland', 0], //	IE
    ['Isle of Man', 0], //	IM
    ['Israel', 0], //	IL
    ['Italy', 0], //	IT
    ['Jamaica', 0], //	JM
    ['Japan', 0], //	JP
    ['Jersey', 0], //	JE
    ['Jordan', 0], //	JO
    ['Kazakhstan', 0], //	KZ
    ['Kenya', 0], //	KE
    ['Kiribati', 0], //	KI
    ['South Korea', 0], //	KP
    ['Korea (Democratic People\'s Republic of)', 0], //	KP
    ['North Korea', 0], //	KR
    ['Korea (Republic of)', 0], //	KR
    ['Kuwait', 0], //	KW
    ['Kyrgyzstan', 0], //	KG
    ['Laos', 0], //	LA
    ['Lao People\'s Democratic Republic', 0], //	LA
    ['Latvia', 0], //	LV
    ['Lebanon', 0], //	LB
    ['Lesotho', 0], //	LS
    ['Liberia', 0], //	LR
    ['Libya', 0], //	LY
    ['Liechtenstein', 0], //	LI
    ['Lithuania', 0], //	LT
    ['Luxembourg', 0], //	LU
    ['Macao', 0], //	MO
    ['Macedonia (the former Yugoslav Republic of)', 0], //	MK
    ['Madagascar', 0], //	MG
    ['Malawi', 0], //	MW
    ['Malaysia', 0], //	MY
    ['Maldives', 0], //	MV
    ['Mali', 0], //	ML
    ['Malta', 0], //	MT
    ['Marshall Islands', 0], //	MH
    ['Martinique', 0], //	MQ
    ['Mauritania', 0], //	MR
    ['Mauritius', 0], //	MU
    ['Mayotte', 0], //	YT
    ['Mexico', 1], //	MX
    ['Micronesia (Federated States of)', 0], //	FM
    ['Moldova (Republic of)', 0], //	MD
    ['Monaco', 0], //	MC
    ['Mongolia', 0], //	MN
    ['Montenegro', 0], //	ME
    ['Montserrat', 0], //	MS
    ['Morocco', 0], //	MA
    ['Mozambique', 0], //	MZ
    ['Myanmar', 0], //	MM
    ['Namibia', 0], //	NA
    ['Nauru', 0], //	NR
    ['Nepal', 0], //	NP
    ['Netherlands', 0], //	NL
    ['New Caledonia', 0], //	NC
    ['New Zealand', 0], //	NZ
    ['Nicaragua', 0], //	NI
    ['Niger', 0], //	NE
    ['Nigeria', 0], //	NG
    ['Niue', 0], //	NU
    ['Norfolk Island', 0], //	NF
    ['Northern Mariana Islands', 0], //	MP
    ['Norway', 0], //	NO
    ['Oman', 0], //	OM
    ['Pakistan', 0], //	PK
    ['Palau', 0], //	PW
    ['Palestine, State of', 0], //	PS
    ['Panama', 0], //	PA
    ['Papua New Guinea', 0], //	PG
    ['Paraguay', 1], //	PY
    ['Peru', 2], //	PE
    ['Philippines', 0], //	PH
    ['Pitcairn', 0], //	PN
    ['Poland', 0], //	PL
    ['Portugal', 0], //	PT
    ['Puerto Rico', 0], //	PR
    ['Qatar', 0], //	QA
    ['Réunion', 0], //	RE
    ['Romania', 0], //	RO
    ['Russian Federation', 0], //	RU
    ['Russia', 0], //	RU
    ['Rwanda', 0], //	RW
    ['Saint Barthélemy', 0], //	BL
    ['Saint Helena, Ascension and Tristan da Cunha', 0], //	SH
    ['Saint Kitts and Nevis', 0], //	KN
    ['Saint Lucia', 0], //	LC
    ['Saint Martin (French part)', 0], //	MF
    ['Saint Pierre and Miquelon', 0], //	PM
    ['Saint Vincent and the Grenadines', 0], //	VC
    ['Samoa', 0], //	WS
    ['San Marino', 0], //	SM
    ['Sao Tome and Principe', 0], //	ST
    ['Saudi Arabia', 0], //	SA
    ['Senegal', 0], //	SN
    ['Serbia', 0], //	RS
    ['Seychelles', 0], //	SC
    ['Sierra Leone', 0], //	SL
    ['Singapore', 0], //	SG
    ['Sint Maarten (Dutch part)', 0], //	SX
    ['Slovakia', 0], //	SK
    ['Slovenia', 0], //	SI
    ['Solomon Islands', 0], //	SB
    ['Somalia', 0], //	SO
    ['South Africa', 0], //	ZA
    ['South Georgia and the South Sandwich Islands', 0], //	GS
    ['Sudan', 0], //	SS
    ['South Sudan', 0], //	SS
    ['Spain', 0], //	ES
    ['Sri Lanka', 0], //	LK
    ['Sudan', 0], //	SD
    ['Suriname', 0], //	SR
    ['Svalbard and Jan Mayen', 0], //	SJ
    ['Swaziland', 0], //	SZ
    ['Sweden', 0], //	SE
    ['Switzerland', 0], //	CH
    ['Syria', 0], //	SY
    ['Syrian Arab Republic', 0], //	SY
    ['Taiwan, Province of China[a]', 0], //	TW
    ['Tajikistan', 0], //	TJ
    ['Tanzania', 0], //	TZ
    ['Tanzania, United Republic of', 0], //	TZ
    ['Thailand', 0], //	TH
    ['Timor-Leste', 0], //	TL
    ['Togo', 0], //	TG
    ['Tokelau', 0], //	TK
    ['Tonga', 0], //	TO
    ['Trinidad and Tobago', 0], //	TT
    ['Tunisia', 0], //	TN
    ['Turkey', 0], //	TR
    ['Turkmenistan', 0], //	TM
    ['Turks and Caicos Islands', 0], //	TC
    ['Tuvalu', 0], //	TV
    ['Uganda', 0], //	UG
    ['Ukraine', 0], //	UA
    ['United Arab Emirates', 0], //	AE
    ['United Kingdom', 0], //	GB
    ['United Kingdom of Great Britain and Northern Ireland', 0], //	GB
    ['United States', 2], //	US
    ['United States of America', 0], //	US
    ['United States Minor Outlying Islands', 0], //	UM
    ['Uruguay', 1], //	UY
    ['Uzbekistan', 0], //	UZ
    ['Vanuatu', 0], //	VU
    ['Venezuela', 0], //	VE
    ['Venezuela (Bolivarian Republic of)', 0], //	VE
    ['Vietnam', 0], //	VN
    ['Viet Nam', 0], //	VN
    ['Virgin Islands (British)', 0], //	VG
    ['Virgin Islands (U.S.)', 0], //	VI
    ['Wallis and Futuna', 0], //	WF
    ['Western Sahara', 0], //	EH
    ['Yemen', 0], //	YE
    ['Zambia', 0], //	ZM
    ['Zimbabwe', 0], //	ZW
];

let code_count = [
    ['Code', 'Touchdowns'],
    ['AD', 0],
    ['AE', 0],
    ['AF', 0],
    ['AG', 0],
    ['AI', 0],
    ['AL', 0],
    ['AM', 0],
    ['AO', 0],
    ['AQ', 0],
    ['AR', 3],
    ['AS', 0],
    ['AT', 0],
    ['AU', 0],
    ['AW', 0],
    ['AX', 0],
    ['AZ', 0],
    ['BA', 0],
    ['BB', 0],
    ['BD', 0],
    ['BE', 0],
    ['BF', 0],
    ['BG', 0],
    ['BH', 0],
    ['BI', 0],
    ['BJ', 0],
    ['BL', 0],
    ['BM', 0],
    ['BN', 0],
    ['BO', 1],
    ['BQ', 0],
    ['BR', 3],
    ['BS', 0],
    ['BT', 0],
    ['BV', 0],
    ['BW', 0],
    ['BY', 0],
    ['BZ', 0],
    ['CA', 1],
    ['CC', 0],
    ['CD', 0],
    ['CF', 0],
    ['CG', 0],
    ['CH', 0],
    ['CI', 0],
    ['CK', 0],
    ['CL', 0],
    ['CM', 0],
    ['CN', 0],
    ['CO', 1],
    ['CR', 0],
    ['CU', 0],
    ['CV', 0],
    ['CW', 0],
    ['CX', 0],
    ['CY', 0],
    ['CZ', 0],
    ['DE', 0],
    ['DJ', 0],
    ['DK', 0],
    ['DM', 0],
    ['DO', 0],
    ['DZ', 0],
    ['EC', 0],
    ['EE', 0],
    ['EG', 0],
    ['EH', 0],
    ['ER', 0],
    ['ES', 0],
    ['ET', 0],
    ['FI', 0],
    ['FJ', 0],
    ['FK', 0],
    ['FM', 0],
    ['FO', 0],
    ['FR', 0],
    ['GA', 0],
    ['GB', 0],
    ['GD', 0],
    ['GE', 0],
    ['GF', 0],
    ['GG', 0],
    ['GH', 0],
    ['GI', 0],
    ['GL', 0],
    ['GM', 0],
    ['GN', 0],
    ['GP', 0],
    ['GQ', 0],
    ['GR', 0],
    ['GS', 0],
    ['GT', 0],
    ['GU', 0],
    ['GW', 0],
    ['GY', 0],
    ['HK', 0],
    ['HM', 0],
    ['HN', 0],
    ['HR', 0],
    ['HT', 0],
    ['HU', 0],
    ['ID', 0],
    ['IE', 0],
    ['IL', 0],
    ['IM', 0],
    ['IN', 0],
    ['IO', 0],
    ['IQ', 0],
    ['IR', 0],
    ['IS', 0],
    ['IT', 0],
    ['JE', 0],
    ['JM', 0],
    ['JO', 0],
    ['JP', 0],
    ['KE', 0],
    ['KG', 0],
    ['KH', 0],
    ['KI', 0],
    ['KM', 0],
    ['KN', 0],
    ['KP', 0],
    ['KR', 0],
    ['KW', 0],
    ['KY', 0],
    ['KZ', 0],
    ['LA', 0],
    ['LB', 0],
    ['LC', 0],
    ['LI', 0],
    ['LK', 0],
    ['LR', 0],
    ['LS', 0],
    ['LT', 0],
    ['LU', 0],
    ['LV', 0],
    ['LY', 0],
    ['MA', 0],
    ['MC', 0],
    ['MD', 0],
    ['ME', 0],
    ['MF', 0],
    ['MG', 0],
    ['MH', 0],
    ['MK', 0],
    ['ML', 0],
    ['MM', 0],
    ['MN', 0],
    ['MO', 0],
    ['MP', 0],
    ['MQ', 0],
    ['MR', 0],
    ['MS', 0],
    ['MT', 0],
    ['MU', 0],
    ['MV', 0],
    ['MW', 0],
    ['MX', 1],
    ['MY', 0],
    ['MZ', 0],
    ['NA', 0],
    ['NC', 0],
    ['NE', 0],
    ['NF', 0],
    ['NG', 0],
    ['NI', 0],
    ['NL', 0],
    ['NO', 0],
    ['NP', 0],
    ['NR', 0],
    ['NU', 0],
    ['NZ', 0],
    ['OM', 0],
    ['PA', 0],
    ['PE', 1],
    ['PF', 0],
    ['PG', 0],
    ['PH', 0],
    ['PK', 0],
    ['PL', 0],
    ['PM', 0],
    ['PN', 0],
    ['PR', 0],
    ['PS', 0],
    ['PT', 0],
    ['PW', 0],
    ['PY', 1],
    ['QA', 0],
    ['RE', 0],
    ['RO', 0],
    ['RS', 0],
    ['RU', 0],
    ['RW', 0],
    ['SA', 0],
    ['SB', 0],
    ['SC', 0],
    ['SD', 0],
    ['SE', 0],
    ['SG', 0],
    ['SH', 0],
    ['SI', 0],
    ['SJ', 0],
    ['SK', 0],
    ['SL', 0],
    ['SM', 0],
    ['SN', 0],
    ['SO', 0],
    ['SR', 0],
    ['SS', 0],
    ['ST', 0],
    ['SV', 0],
    ['SX', 0],
    ['SY', 0],
    ['SZ', 0],
    ['TC', 0],
    ['TD', 0],
    ['TF', 0],
    ['TG', 0],
    ['TH', 0],
    ['TJ', 0],
    ['TK', 0],
    ['TL', 0],
    ['TM', 0],
    ['TN', 0],
    ['TO', 0],
    ['TR', 0],
    ['TT', 0],
    ['TV', 0],
    ['TW', 0],
    ['TZ', 0],
    ['UA', 0],
    ['UG', 0],
    ['UM', 0],
    ['US', 1],
    ['UY', 1],
    ['UZ', 0],
    ['VA', 0],
    ['VC', 0],
    ['VE', 0],
    ['VG', 0],
    ['VI', 0],
    ['VN', 0],
    ['VU', 0],
    ['WF', 0],
    ['WS', 0],
    ['YE', 0],
    ['YT', 0],
    ['ZA', 0],
    ['ZM', 0],
    ['ZW', 0]
];

// TODO: debug and complete
let country_count_group_by_continent = [
  ['Country', 'Touchdowns'],
    ['Chile', 1],
    // Africa
    ['Algeria', 0], ['Angola', 0], ['Benin', 0], ['Botswana', 0],
    ['Burkina Faso', 0], ['Burundi', 0], ['Cameroon', 0],
    ['Canary Islands', 0], ['Cape Verde', 0],
    ['Central African Republic', 0], ['Ceuta', 0], ['Chad', 0],
    ['Comoros', 0], ['Cote d\'Ivoire', 0],
    ['Democratic Republic of the Congo', 0], ['Djibouti', 0],
    ['Egypt', 0], ['Equatorial Guinea', 0], ['Eritrea', 0],
    ['Ethiopia', 0], ['Gabon', 0], ['Gambia', 0], ['Ghana', 0],
    ['Guinea', 0], ['Guinea-Bissau', 0], ['Kenya', 0],
    ['Lesotho', 0], ['Liberia', 0], ['Libya', 0], ['Madagascar', 0],
    ['Madeira', 0], ['Malawi', 0], ['Mali', 0], ['Mauritania', 0],
    ['Mauritius', 0], ['Mayotte', 0], ['Melilla', 0],
    ['Morocco', 0], ['Mozambique', 0], ['Namibia', 0],
    ['Niger', 0], ['Nigeria', 0], ['Republic of the Congo', 0],
    ['Réunion', 0], ['Rwanda', 0], ['Saint Helena', 0],
    ['São Tomé and Principe', 0], ['Senegal', 0],
    ['Seychelles', 0], ['Sierra Leone', 0], ['Somalia', 0],
    ['Sudan', 0], ['South Africa', 0], ['South Sudan', 0],
    ['Swaziland', 0], ['Tanzania', 0], ['Togo', 0], ['Tunisia', 0],
    ['Uganda', 0], ['Western Sahara', 0], ['Zambia', 0],
    ['Zimbabwe', 0]
];


let country_count_code = [
    ['Country', 'Touchdowns', 'Code'],
    ['Afghanistan', 0, 'AF'],
    ['Aland Islands', 0, 'AX'],
    ['Albania', 0, 'AL'],
    ['Algeria', 0, 'DZ'],
    ['American Samoa', 0, 'AS'],
    ['Andorra', 0, 'AD'],
    ['Angola', 0, 'AO'],
    ['Anguilla', 0, 'AI'],
    ['Antarctica', 0, 'AQ'],
    ['Antigua And Barbuda', 0, 'AG'],
    ['Argentina', 0, 'AR'],
    ['Armenia', 0, 'AM'],
    ['Aruba', 0, 'AW'],
    ['Australia', 0, 'AU'],
    ['Austria', 0, 'AT'],
    ['Azerbaijan', 0, 'AZ'],
    ['Bahamas', 0, 'BS'],
    ['Bahrain', 0, 'BH'],
    ['Bangladesh', 0, 'BD'],
    ['Barbados', 0, 'BB'],
    ['Belarus', 0, 'BY'],
    ['Belgium', 0, 'BE'],
    ['Belize', 0, 'BZ'],
    ['Benin', 0, 'BJ'],
    ['Bermuda', 0, 'BM'],
    ['Bhutan', 0, 'BT'],
    ['Bolivia', 0, 'BO'],
    ['Bosnia And Herzegovina', 0, 'BA'],
    ['Botswana', 0, 'BW'],
    ['Bouvet Island', 0, 'BV'],
    ['Brazil', 0, 'BR'],
    ['British Indian Ocean Territory', 0, 'IO'],
    ['Brunei Darussalam', 0, 'BN'],
    ['Bulgaria', 0, 'BG'],
    ['Burkina Faso', 0, 'BF'],
    ['Burundi', 0, 'BI'],
    ['Cambodia', 0, 'KH'],
    ['Cameroon', 0, 'CM'],
    ['Canada', 0, 'CA'],
    ['Cape Verde', 0, 'CV'],
    ['Cayman Islands', 0, 'KY'],
    ['Central African Republic', 0, 'CF'],
    ['Chad', 0, 'TD'],
    ['Chile', 0, 'CL'],
    ['China', 0, 'CN'],
    ['Christmas Island', 0, 'CX'],
    ['Cocos (Keeling) Islands', 0, 'CC'],
    ['Colombia', 0, 'CO'],
    ['Comoros', 0, 'KM'],
    ['Congo', 0, 'CG'],
    ['Congo, Democratic Republic', 0, 'CD'],
    ['Cook Islands', 0, 'CK'],
    ['Costa Rica', 0, 'CR'],
    ['Cote D\'Ivoire', 0, 'CI'],
    ['Croatia', 0, 'HR'],
    ['Cuba', 0, 'CU'],
    ['Cyprus', 0, 'CY'],
    ['Czech Republic', 0, 'CZ'],
    ['Denmark', 0, 'DK'],
    ['Djibouti', 0, 'DJ'],
    ['Dominica', 0, 'DM'],
    ['Dominican Republic', 0, 'DO'],
    ['Ecuador', 0, 'EC'],
    ['Egypt', 0, 'EG'],
    ['El Salvador', 0, 'SV'],
    ['Equatorial Guinea', 0, 'GQ'],
    ['Eritrea', 0, 'ER'],
    ['Estonia', 0, 'EE'],
    ['Ethiopia', 0, 'ET'],
    ['Falkland Islands (Malvinas)', 0, 'FK'],
    ['Faroe Islands', 0, 'FO'],
    ['Fiji', 0, 'FJ'],
    ['Finland', 0, 'FI'],
    ['France', 0, 'FR'],
    ['French Guiana', 0, 'GF'],
    ['French Polynesia', 0, 'PF'],
    ['French Southern Territories', 0, 'TF'],
    ['Gabon', 0, 'GA'],
    ['Gambia', 0, 'GM'],
    ['Georgia', 0, 'GE'],
    ['Germany', 0, 'DE'],
    ['Ghana', 0, 'GH'],
    ['Gibraltar', 0, 'GI'],
    ['Greece', 0, 'GR'],
    ['Greenland', 0, 'GL'],
    ['Grenada', 0, 'GD'],
    ['Guadeloupe', 0, 'GP'],
    ['Guam', 0, 'GU'],
    ['Guatemala', 0, 'GT'],
    ['Guernsey', 0, 'GG'],
    ['Guinea', 0, 'GN'],
    ['Guinea-Bissau', 0, 'GW'],
    ['Guyana', 0, 'GY'],
    ['Haiti', 0, 'HT'],
    ['Heard Island & Mcdonald Islands', 0, 'HM'],
    ['Holy See (Vatican City State)', 0, 'VA'],
    ['Honduras', 0, 'HN'],
    ['Hong Kong', 0, 'HK'],
    ['Hungary', 0, 'HU'],
    ['Iceland', 0, 'IS'],
    ['India', 0, 'IN'],
    ['Indonesia', 0, 'ID'],
    ['Iran, Islamic Republic Of', 0, 'IR'],
    ['Iraq', 0, 'IQ'],
    ['Ireland', 0, 'IE'],
    ['Isle Of Man', 0, 'IM'],
    ['Israel', 0, 'IL'],
    ['Italy', 0, 'IT'],
    ['Jamaica', 0, 'JM'],
    ['Japan', 0, 'JP'],
    ['Jersey', 0, 'JE'],
    ['Jordan', 0, 'JO'],
    ['Kazakhstan', 0, 'KZ'],
    ['Kenya', 0, 'KE'],
    ['Kiribati', 0, 'KI'],
    ['Korea', 0, 'KR'],
    ['Kuwait', 0, 'KW'],
    ['Kyrgyzstan', 0, 'KG'],
    ['Lao People\'s Democratic Republic', 0, 'LA'],
    ['Latvia', 0, 'LV'],
    ['Lebanon', 0, 'LB'],
    ['Lesotho', 0, 'LS'],
    ['Liberia', 0, 'LR'],
    ['Libyan Arab Jamahiriya', 0, 'LY'],
    ['Liechtenstein', 0, 'LI'],
    ['Lithuania', 0, 'LT'],
    ['Luxembourg', 0, 'LU'],
    ['Macao', 0, 'MO'],
    ['Macedonia', 0, 'MK'],
    ['Madagascar', 0, 'MG'],
    ['Malawi', 0, 'MW'],
    ['Malaysia', 0, 'MY'],
    ['Maldives', 0, 'MV'],
    ['Mali', 0, 'ML'],
    ['Malta', 0, 'MT'],
    ['Marshall Islands', 0, 'MH'],
    ['Martinique', 0, 'MQ'],
    ['Mauritania', 0, 'MR'],
    ['Mauritius', 0, 'MU'],
    ['Mayotte', 0, 'YT'],
    ['Mexico', 0, 'MX'],
    ['Micronesia, Federated States Of', 0, 'FM'],
    ['Moldova', 0, 'MD'],
    ['Monaco', 0, 'MC'],
    ['Mongolia', 0, 'MN'],
    ['Montenegro', 0, 'ME'],
    ['Montserrat', 0, 'MS'],
    ['Morocco', 0, 'MA'],
    ['Mozambique', 0, 'MZ'],
    ['Myanmar', 0, 'MM'],
    ['Namibia', 0, 'NA'],
    ['Nauru', 0, 'NR'],
    ['Nepal', 0, 'NP'],
    ['Netherlands', 0, 'NL'],
    ['Netherlands Antilles', 0, 'AN'],
    ['New Caledonia', 0, 'NC'],
    ['New Zealand', 0, 'NZ'],
    ['Nicaragua', 0, 'NI'],
    ['Niger', 0, 'NE'],
    ['Nigeria', 0, 'NG'],
    ['Niue', 0, 'NU'],
    ['Norfolk Island', 0, 'NF'],
    ['Northern Mariana Islands', 0, 'MP'],
    ['Norway', 0, 'NO'],
    ['Oman', 0, 'OM'],
    ['Pakistan', 0, 'PK'],
    ['Palau', 0, 'PW'],
    ['Palestinian Territory, Occupied', 0, 'PS'],
    ['Panama', 0, 'PA'],
    ['Papua New Guinea', 0, 'PG'],
    ['Paraguay', 0, 'PY'],
    ['Peru', 0, 'PE'],
    ['Philippines', 0, 'PH'],
    ['Pitcairn', 0, 'PN'],
    ['Poland', 0, 'PL'],
    ['Portugal', 0, 'PT'],
    ['Puerto Rico', 0, 'PR'],
    ['Qatar', 0, 'QA'],
    ['Reunion', 0, 'RE'],
    ['Romania', 0, 'RO'],
    ['Russian Federation', 0, 'RU'],
    ['Rwanda', 0, 'RW'],
    ['Saint Barthelemy', 0, 'BL'],
    ['Saint Helena', 0, 'SH'],
    ['Saint Kitts And Nevis', 0, 'KN'],
    ['Saint Lucia', 0, 'LC'],
    ['Saint Martin', 0, 'MF'],
    ['Saint Pierre And Miquelon', 0, 'PM'],
    ['Saint Vincent And Grenadines', 0, 'VC'],
    ['Samoa', 0, 'WS'],
    ['San Marino', 0, 'SM'],
    ['Sao Tome And Principe', 0, 'ST'],
    ['Saudi Arabia', 0, 'SA'],
    ['Senegal', 0, 'SN'],
    ['Serbia', 0, 'RS'],
    ['Seychelles', 0, 'SC'],
    ['Sierra Leone', 0, 'SL'],
    ['Singapore', 0, 'SG'],
    ['Slovakia', 0, 'SK'],
    ['Slovenia', 0, 'SI'],
    ['Solomon Islands', 0, 'SB'],
    ['Somalia', 0, 'SO'],
    ['South Africa', 0, 'ZA'],
    ['South Georgia And Sandwich Isl.', 0, 'GS'],
    ['Spain', 0, 'ES'],
    ['Sri Lanka', 0, 'LK'],
    ['Sudan', 0, 'SD'],
    ['Suriname', 0, 'SR'],
    ['Svalbard And Jan Mayen', 0, 'SJ'],
    ['Swaziland', 0, 'SZ'],
    ['Sweden', 0, 'SE'],
    ['Switzerland', 0, 'CH'],
    ['Syrian Arab Republic', 0, 'SY'],
    ['Taiwan', 0, 'TW'],
    ['Tajikistan', 0, 'TJ'],
    ['Tanzania', 0, 'TZ'],
    ['Thailand', 0, 'TH'],
    ['Timor-Leste', 0, 'TL'],
    ['Togo', 0, 'TG'],
    ['Tokelau', 0, 'TK'],
    ['Tonga', 0, 'TO'],
    ['Trinidad And Tobago', 0, 'TT'],
    ['Tunisia', 0, 'TN'],
    ['Turkey', 0, 'TR'],
    ['Turkmenistan', 0, 'TM'],
    ['Turks And Caicos Islands', 0, 'TC'],
    ['Tuvalu', 0, 'TV'],
    ['Uganda', 0, 'UG'],
    ['Ukraine', 0, 'UA'],
    ['United Arab Emirates', 0, 'AE'],
    ['United Kingdom', 0, 'GB'],
    ['United States', 0, 'US'],
    ['United States Outlying Islands', 0, 'UM'],
    ['Uruguay', 0, 'UY'],
    ['Uzbekistan', 0, 'UZ'],
    ['Vanuatu', 0, 'VU'],
    ['Venezuela', 0, 'VE'],
    ['Viet Nam', 0, 'VN'],
    ['Virgin Islands, British', 0, 'VG'],
    ['Virgin Islands, U.S.', 0, 'VI'],
    ['Wallis And Futuna', 0, 'WF'],
    ['Western Sahara', 0, 'EH'],
    ['Yemen', 0, 'YE'],
    ['Zambia', 0, 'ZM'],
    ['Zimbabwe', 0, 'ZW']
];

let country_count_clean = [
    ['Country', 'Touchdowns'],
    ['Afghanistan',0],
    ['Albania',0],
    ['Algeria',0],
    ['Andorra',0],
    ['Angola',0],
    ['Antarctica',0],
    ['Argentina',0],
    ['Armenia',0],
    ['Australia',0],
    ['Austria',0],
    ['Azerbaijan',0],
    ['Bahamas',0],
    ['Bahrain',0],
    ['Bangladesh',0],
    ['Barbados',0],
    ['Belarus',0],
    ['Belgium',0],
    ['Benin',0],
    ['Bhutan',0],
    ['Bolivia',0],
    ['Bosnia and Herzegovina',0],
    ['Botswana',0],
    ['Brazil',0],
    ['Bulgaria',0],
    ['CI',0],
    ['Cambodia',0],
    ['Cameroon',0],
    ['Canada',0],
    ['Caribbean',0],
    ['Chile',0],
    ['China',0],
    ['Colombia',0],
    ['Costa Rica',0],
    ['Croatia',0],
    ['Cuba',0],
    ['Cyprus',0],
    ['Czech Republic ',0],
    ['Democratic Republic of the Congo',0],
    ['Denmark',0],
    ['Dominican Republic',0],
    ['Ecuador',0],
    ['Egypt',0],
    ['El Salvador',0],
    ['Estonia',0],
    ['Ethiopia',0],
    ['Faroe Islands',0],
    ['Fiji',0],
    ['Finland',0],
    ['France',0],
    ['Gabon',0],
    ['Georgia',0],
    ['Germany',0],
    ['Ghana',0],
    ['Greece',0],
    ['Guatemala',0],
    ['Guinea',0],
    ['Guyana',0],
    ['Haiti',0],
    ['Hawaii',0],
    ['Honduras',0],
    ['Hong Kong',0],
    ['Hungary',0],
    ['Iceland',0],
    ['India',0],
    ['Indonesia',0],
    ['Iran',0],
    ['Iraq',0],
    ['Ireland',0],
    ['Israel',0],
    ['Italy',0],
    ['Jamaica',0],
    ['Japan',0],
    ['Jordan',0],
    ['Kazakhstan',0],
    ['Kenya',0],
    ['Kuwait',0],
    ['Kyrgyzstan',0],
    ['Laos',0],
    ['Latvia',0],
    ['Lebanon',0],
    ['Libya',0],
    ['Liechtenstein',0],
    ['Lithuania',0],
    ['Luxembourg',0],
    ['Macedonia',0],
    ['Madagascar',0],
    ['Malaysia',0],
    ['Maldives',0],
    ['Malta',0],
    ['Mauritania',0],
    ['Mauritius',0],
    ['Mexico',0],
    ['Moldova',0],
    ['Mongolia',0],
    ['Montenegro',0],
    ['Morocco',0],
    ['Mozambique',0],
    ['Myanmar',0],
    ['Namibia',0],
    ['Nepal',0],
    ['Netherlands',0],
    ['New Caledonia',0],
    ['New Zealand',0],
    ['Nicaragua',0],
    ['Niger',0],
    ['Nigeria',0],
    ['Norway',0],
    ['Oman',0],
    ['Pakistan',0],
    ['Palestine',0],
    ['Panama',0],
    ['Papua New Guinea',0],
    ['Paraguay',0],
    ['Peru',0],
    ['Philippines',0],
    ['Poland',0],
    ['Portugal',0],
    ['Puerto Rico',0],
    ['Qatar',0],
    ['Romania',0],
    ['Russia',0],
    ['Samoa',0],
    ['San Marino',0],
    ['Saudi Arabia',0],
    ['Scotland',0],
    ['Senegal',0],
    ['Serbia',0],
    ['Seychelles',0],
    ['Singapore',0],
    ['Slovakia',0],
    ['Slovenia',0],
    ['Somalia',0],
    ['South Africa',0],
    ['South Korea',0],
    ['Spain',0],
    ['Sri Lanka',0],
    ['Sudan',0],
    ['Swaziland',0],
    ['Sweden',0],
    ['Switzerland',0],
    ['Syria',0],
    ['Taiwan',0],
    ['Tajikistan',0],
    ['Tanzania',0],
    ['Thailand',0],
    ['Trinidad and Tobago',0],
    ['Tunisia',0],
    ['Turkey',0],
    ['Turkmenistan',0],
    ['Uganda',0],
    ['Ukraine',0],
    ['United Arab Emirates',0],
    ['United Kingdom',0],
    ['United States',0],
    ['Unknown',0],
    ['Uruguay',0],
    ['Uzbekistan',0],
    ['Venezuela',0],
    ['Vietnam',0],
    ['Yemen',0],
    ['Zambia',0],
    ['Zimbabwe',0]
];
