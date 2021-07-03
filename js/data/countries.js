const countries = [
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