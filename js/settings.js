var CANVAS_WIDTH = 1920;
var CANVAS_HEIGHT = 1920;

var EDGEBOARD_X = 0;
var EDGEBOARD_Y = 0;

var FONT = "futura_t_otregular";
var ENABLE_FULLSCREEN;

var SOUNDTRACK_VOLUME_IN_GAME = 0.1;

var FPS      = 30;
var DISABLE_SOUND_MOBILE = false;

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_MODE    = 2;
var STATE_GAME    = 3;

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_BUT_YES_DOWN  = 4;
var ON_BUT_NO_DOWN  = 5;
var ON_BACK_MENU = 6;
var ON_RESTART = 7;
var ON_NEXT = 8;
var ON_CARD_ANIMATION_ENDING = 9;
var ON_CARD_MOVE_UP_END = 10;
var ON_CARD_MOVE_X_END = 11;
var ON_CARD_SHOWN = 12;
var ON_CARD_SWAP = 13;
var ON_CARD_DRAGGING = 14;
var ON_CARD_RELEASE = 15;
var ON_CARD_END_SCALE = 16;
var ON_DECK_RELEASE = 17;
var ON_SELECT_COMBO = 18;

var CARD_STATE_DEALING = 0;

var CARD_DECK = 0;
var CARD_WASTE = 1;
var CARD_HAND = 2;
var CARD_TABLE = 3;

var CARD_WIDTH = 234;
var CARD_HEIGHT = 358;
var CARD_WIDTH_OFFSET_IN_HAND = 100;
var CARD_HEIGHT_OFFSET_IN_HAND = 100;

var TABLE_X = 150+CARD_WIDTH/2;
var TABLE_Y = 150+CARD_HEIGHT/2;

var TIME_CARD_DEALING = 200;
var TIME_CARD_MOVE_Y = 500;
var TIME_HELP_PLAYER = 30000;
var MAX_TABLE_WIDTH = 1400;
var MAX_TABLE_HEIGHT = 1400;
var CARD_TO_DEAL = {};
var CARD_MOVE_UP_OFFSET = 160;
var CARD_CPU_MOVE_UP_OFFSET = 80;
var SCORE_TO_REACH = {};
var PLAYER_ID = 0;
var ACE_VALUE = 1;
var JOKER_VALUE = 15;
var TIME_HAND_ANIM = 4000;
var MIN_OPENING_VALUE;
var SCORE_ACE;
var SCORE_JOKER;
var JOKER_AVAILABLE;
var ACE_HIGH;
var GOING_RUMMY_RULE;
var MAX_NUM_SHUFFLE = 3;

var EVALUATE_POKER = 0;
var EVALUATE_TRIS = 1;
var EVALUATE_STRAIGHT = 2;
var EVALUATE_STRAIGHT_WITH_ACE_HIGH = 3;
var EVALUATE_UNDER_CONSTRUCTION = 4;
var EVALUATE_REPLACE_JOKER = 5;
var EVALUATE_NULL = 6;
var EVALUATE_CARD_NO_VALID_IN_COMBO = 7;

var STATE_AI_IDLE = 0;
var STATE_AI_READY_TO_START = 1;
var STATE_AI_CHECKED_WASTE = 2;
var STATE_AI_CARD_DEALING = 3;
var STATE_AI_CHECKED_COMBO = 4;
var STATE_AI_CHECKED_CARD_TABLE = 5;
var STATE_AI_DECIDE_CARD_WASTE = 6;

var SCOREBOARD_IDLE = "state_idle";
var SCOREBOARD_WIN_ROUND = "state_win_round";
var SCOREBOARD_WIN_GAME = "state_win_game";
var SCOREBOARD_LOSE_ROUND = "state_lose_round";