// Types of the Telegram API 6.0, redacted by Ethan Arm


export interface Update {
    update_id: number,
    message?: Message,
    edited_message?: Message,
    channel_post?: Message,
    edited_channel_post?: Message,
    inline_query?: InlineQuery,
    chosen_inline_result?: ChosenInlineResult,
    callback_query?: CallbackQuery,
    shipping_query?: ShippingQuery,
    pre_checkout_query?: PreCheckoutQuery,
    poll?: Poll,
    poll_answer?: PollAnswer,
    my_chat_member?: ChatMemberUpdated,
    chat_member?: ChatMemberUpdated,
    chat_join_request?: ChatJoinRequest
}

export interface WebhookInfo {
    url: string,
    has_custom_certficate: boolean,
    pending_update_count: number,
    ip_address?: string,
    last_error_date?: number,
    last_error_message?: string,
    last_synchronization_error_date?: number,
    max_connections?: number,
    allowed_updates?: string[]
}

export interface User {
    id: number,
    is_bot: boolean,
    first_name?: string,
    username?: string,
    language_code?: string,
    can_join_groups?: boolean,
    can_read_all_group_messages?: string,
    supports_inline_queries?: string
}

export interface Chat {
    id: number,
    type: 'private' | 'group' | 'supergroup' | 'channel',
    title?: string,
    username?: string,
    first_name?: string,
    last_name?: string,
    photo?: ChatPhoto
    bio?: string,
    has_private_forwards?: boolean,
    description?: string,
    invite_link?: string,
    pinned_message?: Message,
    permissions?: ChatPermission,
    slow_mode_delay?: number,
    message_auto_delete_timer?: number,
    has_protected_content?: boolean,
    sticker_set_name?: string,
    can_set_sticker_set?: boolean,
    linked_chat_id?: boolean,
    location?: ChatLocation
}

export interface Message {
    message_id: number,
    from?: User,
    sender_chat?: Chat,
    date?: number,
    chat?: Chat,
    forward_from?: User,
    forward_from_message_id?: number,
    forward_signature?: string,
    forward_sender_name?: string,
    forward_date?: number,
    is_automatic_forward?: boolean,
    reply_to_message?: Message,
    via_bot?: User,
    edit_date?: number,
    has_protected_content?: boolean,
    media_group_id?: string,
    author_signature?: string,
    text?: string,
    entities?: MessageEntity[],
    animation?: Animation,
    audio?: Audio,
    document?: Document,
    photo?: PhotoSize[],
    sticker?: Sticker,
    video?: Video,
    video_note?: VideoNote,
    voice?: Voice,
    caption?: string,
    caption_entities?: MessageEntity[],
    contact?: Contact,
    dice?: Dice,
    game?: Game,
    poll?: Poll,
    venue?: Venue,
    location?: Location,
    new_chat_member?: User,
    new_chat_title?: string,
    new_chat_photo?: PhotoSize[],
    delete_caht_photo?: boolean,
    group_chat_created?: boolean,
    supergroup_chat_created?: boolean,
    channel_chat_created?: boolean,
    message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged,
    migrate_to_chat_id?: number,
    migrate_from_chat_id?: number,
    pinned_message?: Message,
    invoice?: Invoice,
    succesful_payment?: SuccesfulPayment,
    connected_website?: String,
    passport_data?: PassportData,
    proximity_alert_triggered?: ProximityAlertTriggered,
    video_chat_scheduled?: VideoChatScheduled,
    video_chat_started?: VideoChatStarted,
    video_chat_ended?: VideoChatEnded,
    video_chat_participants_invited?: VideoChatParticipantsInvited,
    web_app_data?: WebAppData,
    eply_markup?: InlineKeyboardMarkup
}

export interface MessageId {
    message_id: number
}

export interface MessageEntity {
    type: 'mention' | 'hastag' | 'cashtag' | 'botcommand' | 'url' | 'email' | 'phone_number' | 'bold' | 'italic' | 'underline' | 'strikethrought' | 'spoiler' | 'code' | 'pre' | 'text_link' | 'text_mention',
    offset: number,
    lenght: number,
    url?: string,
    user?: User,
    language?: string
}

export interface PhotoSize {
    file_id: string,
    file_unique_id: string,
    width: number,
    height: number,
    file_size?: number
}

export interface Animation {
    file_id: string,
    file_unique_id: string,
    width: number,
    height: number,
    duration: number,
    thumb?: PhotoSize,
    file_name?: string,
    mime_type?: string,
    file_size?: number
}   

export interface Audio {
    file_id: string,
    file_unique_id: string,
    duration: number,
    performer?: string,
    title?: string,
    mime_type?: string,
    file_size?: number,
    thumb?: PhotoSize
}

export interface Document {
    file_id: string,
    file_unique_id: string,
    thumb?: PhotoSize,
    file_name?: string,
    mime_type?: string,
    file_size?: number
}

export interface Video {
    file_id: string,
    file_unique_id: string,
    width: number,
    height: number,
    duration: number,
    thumb?: PhotoSize,
    file_name?: string,
    mime_type?: string,
    file_size?: string
}

export interface VideoNote {
    file_id: string,
    file_unique_id: string,
    length: number,
    duration: number,
    thumb?: PhotoSize,
    file_size?: number
}

export interface Voice {
    file_id: string,
    file_unique_id: string,
    duration: number,
    mime_type?: string,
    file_size?: number
}

export interface Contact {
    phone_number: string,
    first_name: string,
    last_name?: string,
    user_id?: number,
    vcard?: string
}

export interface Dice {
    emoji: string,
    value: number
}

export interface PollOption {
    text: string,
    voter_count: number
}

export interface PollAnswer {
    poll_id: string,
    user: User,
    option_ids: number[]
}

export interface Poll {
    id: string,
    question: string,
    options: PollOption[],
    total_voter_count: number,
    is_closed: boolean,
    is_anonymous: boolean,
    correct_option_id?: number,
    explanation?: string,
    explanation_entities?: MessageEntity,
    open_period?: number,
    close_date?: number
}

export interface Location {
    longitude: number,
    latitude: number,
    horizontal_accuracy?: number,
    live_period?: number,
    heading?: number,
    proximity_alert_radius?: number
}

export interface Venue {
    location: Location
    title: String,
    address: string,
    foursquare_id?: string,
    foursquare_type?: string,
    google_place_id?: string,
    google_place_type?: string
}

export interface WebAppData {
    data: string,
    button_text: string
}

export interface ProximityAlertTriggered {
    traveler: User,
    watcher: User,
    distance: number
}

export interface MessageAutoDeleteTimerChanged {
    message_auto_delete_time: number
}

export interface VideoChatScheduled {
    start_date: number
}

export interface VideoChatStarted {

}

export interface VideoChatEnded {
    duration: number
}

export interface VideoChatParticipantsInvited {
    users: User[]
}

export interface UserProfilePhotos {
    total_count: number,
    photos: PhotoSize[]
}

export interface File {
    file_id: string,
    file_unique_id: string,
    file_size?: number,
    file_path?: string
}

export interface WebAppInfo {
    url: string
}

export interface ReplyKeyboardMarkup {
    keyboard: KeyboardButton[][],
    resize_keyboard?: boolean,
    one_time_keyboard?: boolean,
    input_fiels_placeholder?: string,
    selective?: boolean
}

export interface KeyboardButton {
    text: string,
    request_contact?: boolean,
    request_location?: boolean,
    request_poll?: KeyboardButtonPollType,
    web_app?: WebAppInfo
}

export interface KeyboardButtonPollType {
    type: string
}

export interface ReplyKeyboardRemove {
    remove_keyboard: boolean
    selective?: boolean
}

export interface InlineKeyboardMarkup {
    inline_keyboard: InlineKeyboardButton[][]
}

export interface InlineKeyboardButton {
    text:string,
    url?: string,
    callback_data?: string,
    web_app?: WebAppInfo,
    login_url?: LoginUrl,
    switch_inline_query?: string,
    switch_inline_query_current_chat?: string,
    callback_game?: CallbackGame,
    pay?: boolean
}

export interface LoginUrl {
    url: string,
    forward_text?: string,
    bot_username?: string,
    requet_write_access?: boolean
}

export interface CallbackQuery {
    id: string,
    from: User,
    message?: Message,
    inline_message_id?: string,
    chat_instance?: string,
    data?: string,
    game_short_name?: string
}

export interface ForceReply {
    force_reply: boolean,
    input_fiels_placeholder?: string,
    selective?: boolean
}

export interface ChatPhoto{
    small_file_id: string,
    small_file_unique_id: string,
    big_file_id: string,
    big_file_unique_id: string
}

export interface ChatInviteLink {
    invite_link: string,
    creator: User,
    creates_join_request: boolean,
    is_primary: boolean,
    is_revoked: boolean,
    name?: string,
    expire_date?: number,
    member_limit?: number,
    pending_join_request_count?: number
}

export interface ChatAdministratorRights {
    is_annonymous: boolean,
    can_manage_chat: boolean,
    can_delete_messages: boolean,
    can_manage_video_chats: boolean,
    can_restrict_members: boolean,
    can_promote_members: boolean,
    can_change_info: boolean,
    can_inivte_users: boolean,
    can_post_messages?: boolean,
    can_edit_messages?: boolean,
    can_pin_messages?: boolean
}

export type ChatMember = ChatMemberOwner | ChatMemberAdministrator | ChatMemberMember | ChatMemberRestricted | ChatMemberLeft | ChatMemberBanned

export interface ChatMemberOwner {
    status: 'creator',
    user: User,
    is_annonymous: boolean,
    custom_title?: string
}

export interface ChatMemberAdministrator {
    status: 'administrator',
    user: User,
    can_be_edited: boolean,
    is_annonymous: boolean,
    can_manage_chat: boolean,
    can_delete_messages: boolean,
    can_manage_video_chats: boolean,
    can_restrict_members: boolean,
    can_promote_members: boolean,
    can_change_info: boolean,
    can_invite_users: boolean,
    can_post_messages?: boolean,
    can_edit_messages?: boolean,
    can_pin_messages?: boolean,
    custom_title?: string
}

export interface ChatMemberMember {
    status: 'member',
    user: User
}

export interface ChatMemberRestricted {
    status: 'restricted',
    user: User,
    is_member: boolean,
    can_change_info: boolean,
    can_invite_users: boolean,
    can_pin_messages: boolean,
    can_send_messages: boolean,
    can_send_media_messages: boolean,
    can_send_polls: boolean,
    can_send_other_messages: boolean,
    can_add_web_page_previews: boolean,
    until_date: number
}

export interface ChatMemberLeft {
    status: 'left',
    user: User
}

export interface ChatMemberBanned {
    status: 'kicked',
    user: User,
    until_date: number
}

export interface ChatMemberUpdated {
    chat: Chat,
    from: User,
    date: number,
    old_chat_member: ChatMember,
    new_chat_member: ChatMember,
    invite_link?: ChatInviteLink
}

export interface ChatJoinRequest {
    chat: Chat,
    from: User,
    date: number,
    bio?: string,
    invite_link?: ChatInviteLink
}

export interface ChatPermission {
    can_send_messages?: boolean,
    can_send_media_messages?: boolean,
    can_send_polls?: boolean,
    can_send_other_messages?: boolean,
    can_add_web_page_previews?: boolean,
    can_change_info?: boolean,
    can_invite_users?: boolean,
    can_pin_messages?: boolean
}

export interface ChatLocation {
    location: Location,
    address: string
}

export interface BotCommand {
    comand: string,
    description: string
}

export type BotCommandScope = BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember

export interface BotCommandScopeDefault {
    type: 'default'
}

export interface BotCommandScopeAllPrivateChats {
    type: 'all_private_chats'
}

export interface BotCommandScopeAllGroupChats {
    type: 'all_group_chats'
}

export interface BotCommandScopeAllChatAdministrators {
    type: 'all_chat_administrators'
}

export interface BotCommandScopeChat {
    type: 'chat',
    chat_id: number | string
}

export interface BotCommandScopeChatAdministrators {
    type: 'chat_administrators',
    chat_id: number | string
}

export interface BotCommandScopeChatMember {
    type: 'chat_member',
    chat_id: number | string,
    user_id: number
}

export type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault

export interface MenuButtonCommands {
    type: 'commands'
}

export interface MenuButtonWebApp {
    type: 'web_app',
    text: string,
    web_app: WebAppInfo
}

export interface MenuButtonDefault {
    type: 'default'
}

export interface ResponseParameters {
    migrate_to_chat_id?: number,
    retry_after?: number
}

export type InputMedia = InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo

export interface InputMediaPhoto {
    type: 'photo',
    media: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[]
}

export interface InputMediaVideo {
    type: 'video',
    media: string,
    thumb?: InputFile | string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    width?: number,
    height?: number,
    duration?: number,
    supports_streaming?: boolean
}

export interface InputMediaAnimation {
    type: 'animation',
    media: string,
    thumb?: InputFile | string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    width?: number,
    height?: number,
    duration?: number
}

export interface InputMediaAudio {
    type: 'audio',
    media: string,
    thumb?: InputFile | string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    duration?: number,
    performer?: string,
    title?: string
}

export interface InputMediaDocument {
    type: 'document',
    media: string,
    thumb?: InputFile | string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    disable_content_type_detection?: boolean
}

export interface InputFile {}

export interface Sticker {
    file_id: string,
    file_unique_id: string,
    width: number,
    height: number,
    is_animated: boolean,
    is_video: boolean,
    thumb?: PhotoSize,
    emoji?: string,
    set_name?: string,
    mask_position?: MaskPosition,
    file_size?: number
}

export interface StickerSet {
    name: string,
    title: string,
    is_animated: boolean,
    is_video: boolean,
    contains_masks: boolean,
    stickers: Sticker[],
    thumb?: PhotoSize
}

export interface MaskPosition {
    point: 'forehead' | 'eyes' | 'mouth' | 'chin',
    x_shift: number,
    y_shift: number,
    scale: number
}

export interface InlineQuery {
    id: string,
    from: User,
    query: string,
    offset: number,
    chat_type?: string,
    location?: Location 
}

export type InlineQueryResult = InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice

export interface InlineQueryResultArticle {
    type: 'article',
    id: string,
    title: string,
    input_message_content: InputMessageContent,
    reply_markup?: InlineKeyboardMarkup,
    url?: string,
    hide_url?: boolean,
    description?: string,
    thumb_url?: string,
    thumb_width?: number,
    thumb_height?: number
}

export interface InlineQueryResultPhoto {
    type: 'photo',
    id: string,
    photo_url: string,
    thumb_url: string,
    photo_width?: number,
    photo_height?: number,
    title?: string,
    description?: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
}

export interface InlineQueryResultGif {
    type: 'gif',
    id: string,
    gif_url: string,
    gif_width?: number,
    gif_height?: number,
    gif_duration?: number,
    thumb_url: string,
    thumb_mime_type?: string,
    title?: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
}

export interface InlineQueryResultMpeg4Gif {
    type: 'mpeg4_gif',
    id: string,
    mpeg4_url: string,
    mpeg4_width?: number,
    mpeg4_height?: number,
    mpeg4_duration?: number,
    thumb_url: string,
    thumb_mime_type?: string,
    title?: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
}

export interface InlineQueryResultVideo {
    type: 'video',
    id: string,
    video_url: string,
    mime_type: string,
    thumb_url: string,
    title: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    video_width?: number,
    video_height?: number,
    video_duration?: number,
    description?: string,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
}

export interface InlineQueryResultAudio {
    type: 'audio',
    id: string,
    audio_url: string,
    title: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    performer?: string,
    audio_duration?: number,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
}

export interface InlineQueryResultVoice {
    type: 'voice',
    id: string,
    voice_url: string,
    title: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    voice_duration?: number,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
}

export interface InlineQueryResultDocument {
    type: 'document',
    id: string,
    title: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    document_url: string,
    mime_type: string,
    description?: string,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
    thumb_url: string,
    thumb_width?: number,
    thumb_height?: number
}

export interface InlineQueryResultLocation {
    type: 'location',
    id: string,
    latitude: number,
    longitude: number,
    title: string,
    horizontal_accuracy?: number,
    live_period?: number,
    heading?: number,
    proximity_alert_radius?: number,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
    thumb_url: string,
    thumb_width?: number,
    thumb_height?: number
}

export interface InlineQueryResultVenue {
    type: 'venue',
    id: string,
    latitude: number,
    longitude: number,
    title: string,
    address: string,
    foursquare_id: string,
    foursquare_type: string,
    google_place_id: string,
    google_place_type: string,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
    thumb_url: string,
    thumb_width?: number,
    thumb_height?: number
}

export interface InlineQueryResultContact {
    type: 'contact',
    id: string,
    phone_number: string,
    first_name: string,
    last_name?: string,
    vcard?: string,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
    thumb_url: string,
    thumb_width?: number,
    thumb_height?: number
}

export interface InlineQueryResultGame {
    type: string,
    id: string,
    game_short_name: string,
    reply_markup?: InlineKeyboardMarkup
}

export interface InlineQueryResultCachedPhoto {
    type: 'photo',
    id: string,
    photo_file_id: string,
    title?: string,
    description?: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
}

export interface InlineQueryResultCachedGif {
    type: 'gif',
    id: string,
    gif_file_id: string,
    title?: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
}

export interface InlineQueryResultCachedMpeg4Gif {
    type: 'mpeg4_gif',
    id: string,
    mpeg4_file_id: string,
    title?: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
}

export interface InlineQueryResultCachedSticker {
    type: 'sticker',
    id: string,
    sticker_file_id: string,
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent
}

export interface InlineQueryResultCachedDocument {
    type: 'document',
    id: string,
    title: string,
    document_file_id: string,
    description?: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
}

export interface InlineQueryResultCachedVideo {
    type: 'video',
    id: string,
    video_file_id: string,
    title: string,
    description?: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
}

export interface InlineQueryResultCachedVoice {
    type: 'voice',
    id: string,
    voice_file_id: string,
    title: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
}

export interface InlineQueryResultCachedAudio {
    type: 'audio',
    id: string,
    audio_file_id: string,
    caption?: string,
    parse_mode?: string,
    caption_entities?: MessageEntity[],
    reply_markup?: InlineKeyboardMarkup,
    input_message_content?: InputMessageContent,
}

export type InputMessageContent = InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent | InputInvoiceMessageContent

export interface InputTextMessageContent {
    message_text: string,
    parse_mode?: string,
    entities?: MessageEntity[],
    disable_web_page_preview?: boolean
}

export interface InputLocationMessageContent {
    latitude: number,
    longitude: number,
    horizontal_accuracy?: number,
    live_period?: number,
    heading?: number,
    proximity_alert_radius?: number
}

export interface InputVenueMessageContent {
    latitude: number,
    longitude: number,
    title: string,
    address: string,
    foursquare_id?: string,
    foursquare_type?: string,
    google_place_id?: string,
    google_place_type?: string
}

export interface InputContactMessageContent {
    phone_number: string,
    first_name: string,
    last_name?: string,
    vcard?: string
}

export interface InputInvoiceMessageContent {
    title: string,
    description: string,
    payload: string,
    provider_token: string,
    currency: string,
    prices: LabeledPrice,
    max_tip_amount?: number,
    suggested_tip_amounts?: number[],
    provider_data?: string,
    photo_url?: string,
    photo_size?: number,
    photo_width?: number,
    photo_height?: number,
    need_name?: boolean,
    need_phone_number?: boolean,
    need_email?: boolean,
    need_shipping_address?: boolean,
    send_phone_number_to_provider?: boolean,
    send_email_to_provider?: boolean,
    is_flexible?: boolean
}

export interface ChosenInlineResult {
    result_id: string,
    from: User,
    location?: Location,
    inline_message_id?: string,
    query: string
}

export interface SentWebAppMessage {
    inline_message_id?: string
}

export interface LabeledPrice {
    label: string,
    amount: number
}

export interface Invoice {
    title: string,
    description: string,
    start_parameter: string,
    currency: string,
    total_amount: number
}

export interface ShippingAddress {
    country_code: string,
    state: string,
    city: string,
    street_line1: string,
    street_line2: string,
    post_code: string
}

export interface OrderInfo {
    name?: string,
    phone_number?: string,
    email?: string,
    shipping_address?: ShippingAddress 
}

export interface ShippingOption {
    id: string,
    title: string,
    prices: LabeledPrice[]
}

export interface SuccesfulPayment {
    currency: string,
    total_amount: number,
    invoice_payload: string,
    shipping_option_id?: string,
    order_info?: OrderInfo,
    telegram_payment_charge_id: string,
    provider_payment_charge_id: string
}

export interface ShippingQuery {
    id: string,
    from: User,
    invoice_payload: string,
    shipping_adress: ShippingAddress
}

export interface PreCheckoutQuery {
    id: string,
    from: User,
    currency: string,
    total_amount: number,
    invoice_payload: string,
    shipping_option_id?: string,
    order_info?: OrderInfo
}

export interface PassportData {
    data: EncryptedPassportElement[],
    credentials: EncryptedCredentials
}

export interface PassportFile {
    file_id: string,
    file_unique_id: string,
    file_size: number,
    file_date: number
}

export interface EncryptedPassportElement {
    type:  'personal_details' | 'passport' | 'driver_license' | 'identity_card' | 'internal_passport' | 'address' | 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration' | 'phone_number' | 'email',
    data?: string,
    phone_number?: string,
    email?: string,
    files?: PassportFile[],
    front_side?: PassportFile,
    reverse_side?: PassportFile,
    selfie?: PassportFile,
    translation?: PassportFile[],
    hash: string
}

export interface EncryptedCredentials {
    data: string,
    hash: string,
    secret: string
}

export type PassportElementError = PassportElementErrorDataField | PassportElementErrorFrontSide | PassportElementErrorReverseSide | PassportElementErrorSelfie | PassportElementErrorFile | PassportElementErrorFiles | PassportElementErrorTranslationFile | PassportElementErrorTranslationFiles | PassportElementErrorUnspecified


export interface PassportElementErrorDataField {
    source: 'data',
    type: 'personal_details' | 'passport' | 'driver_license' | 'identity_card' | 'internal_passport' | 'address',
    field_name: string,
    data_hash: string,
    message: string
}

export interface PassportElementErrorFrontSide {
    source: 'front_side'
    type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport',
    file_hash: string,
    message: string
}

export interface PassportElementErrorReverseSide {
    source: 'reverse_side',
    type: 'driver_license' | 'identity_card',
    file_hash: string,
    message: string
}

export interface PassportElementErrorSelfie {
    source: 'selfie',
    type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport',
    file_hash: string,
    message: string
}

export interface PassportElementErrorFile {
    source: 'file',
    type: 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration',
    file_hash: string,
    message: string
}

export interface PassportElementErrorFiles {
    source: 'files',
    type: 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration',
    file_hash: string,
    message: string
}

export interface PassportElementErrorTranslationFile {
    source: 'translation_file',
    type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport' | 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration',
    file_hash: string,
    message: string
}

export interface PassportElementErrorTranslationFiles {
    source: 'translation_files',
    type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport' | 'utility_bill' | 'bank_statement' | 'rental_agreement' | 'passport_registration' | 'temporary_registration',
    file_hash: string,
    message: string
}

export interface PassportElementErrorUnspecified {
    source: 'unspecified',
    type: string,
    file_hash: string,
    message: string
}

export interface Game {
    title: string,
    description: string,
    photo: PhotoSize[],
    text: string,
    text_entities: MessageEntity[],
    animation: Animation
}

export interface CallbackGame {

}

export interface GameHighScore {
    position: number,
    user: User,
    score: number
}


