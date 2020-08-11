import txTypes from "src/constants/txTypes";
import {_} from "src/lib/scripts";

import hschainSVG from "src/assets/common/hschain_token.svg";

const SVG = Object.freeze(_.times(7, v => require(`src/assets/transactions/msgsic_${v + 1}.svg`)));

const {HSCHAIN, DEX, TOKENS, MISC} = txTypes;
export default function(type) {
	if (_.find([TOKENS.ISSUE, TOKENS.MINT, TOKENS.BURN, DEX.LIST], v => type === v)) return SVG[0];
	else if (_.find([HSCHAIN.SEND, DEX.ORDER_NEW, DEX.ORDER_CANCEL], v => type === v)) return SVG[1];
	else if (_.find([HSCHAIN.PROPOSAL_SUBMIT, HSCHAIN.DEPOSIT, HSCHAIN.VOTE], v => type === v)) return SVG[2];
	else if (_.find([TOKENS.TIME_LOCK, TOKENS.TIME_RELOCK, TOKENS.TIME_UNLOCK], v => type === v)) return SVG[3];
	else if (_.find([TOKENS.FREEZE, TOKENS.UNFREEZE], v => type === v)) return SVG[4];
	else if (_.find([TOKENS.HTLT_DEPOSIT, TOKENS.HTLT_CLAIM, TOKENS.HTLT_REFUND, TOKENS.HTLT], v => type === v)) return SVG[5];
	else if (MISC.ACCOUNTFLAG_SET === type) return SVG[6];
	return hschainSVG;
}
