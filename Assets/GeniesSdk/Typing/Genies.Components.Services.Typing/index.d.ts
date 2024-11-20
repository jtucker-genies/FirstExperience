
//@Genies-UnityApiInterface
//@ts-nocheck
declare module 'Genies.SDKServices.Model' {
    import * as System from 'System'
    import * as System_ComponentModel_DataAnnotations from 'System.ComponentModel.DataAnnotations'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as Genies_SDKServices_Model_Gear from 'Genies.SDKServices.Model.Gear'
    import * as Genies_SDKServices_Model_GearCreateRequest from 'Genies.SDKServices.Model.GearCreateRequest'
    import * as Genies_SDKServices_Model_GearGetByIdResponse from 'Genies.SDKServices.Model.GearGetByIdResponse'
    import * as Genies_SDKServices_Model_GearUpdateRequest from 'Genies.SDKServices.Model.GearUpdateRequest'
    import * as Genies_SDKServices_Model_Leaderboard from 'Genies.SDKServices.Model.Leaderboard'
    import * as Genies_SDKServices_Model_LeaderboardCreateRequest from 'Genies.SDKServices.Model.LeaderboardCreateRequest'
    import * as Genies_SDKServices_Model_LeaderboardSubmitUserScoreRequest from 'Genies.SDKServices.Model.LeaderboardSubmitUserScoreRequest'
    import * as Genies_SDKServices_Model_StoreItemUpdates from 'Genies.SDKServices.Model.StoreItemUpdates'
    import * as Genies_SDKServices_Model_Trait from 'Genies.SDKServices.Model.Trait'
    import * as Genies_SDKServices_Model_TraitSignalRequest from 'Genies.SDKServices.Model.TraitSignalRequest'
    import * as Genies_SDKServices_Model_UserStoreItemUpdates from 'Genies.SDKServices.Model.UserStoreItemUpdates'
    import * as Genies_SDKServices_Model_UserTraitsGetResponseTraits from 'Genies.SDKServices.Model.UserTraitsGetResponseTraits'
    import * as Genies_SDKServices_Model_UserTraitsUpdateTraits from 'Genies.SDKServices.Model.UserTraitsUpdateTraits'

    class AdminCloudSaveCreateRequest extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<AdminCloudSaveCreateRequest> {

        public get UserId(): string;
        public set UserId(value: string);
        public get InstanceId(): string;
        public set InstanceId(value: string);
        public get Data(): string;
        public set Data(value: string);
        public get _Public(): System.Nullable$1<boolean>;
        public set _Public(value: System.Nullable$1<boolean>);

        public constructor ($userId?: string, $instanceId?: string, $data?: string, $_public?: System.Nullable$1<boolean>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: AdminCloudSaveCreateRequest) : boolean
        public GetHashCode () : int
    }

    class AdminGetTraitStatusResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<AdminGetTraitStatusResponse> {

        public get MaxCounts(): System_Collections_Generic.List$1<MaxCountStatus>;
        public set MaxCounts(value: System_Collections_Generic.List$1<MaxCountStatus>);

        public constructor ($maxCounts?: System_Collections_Generic.List$1<MaxCountStatus>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: AdminGetTraitStatusResponse) : boolean
        public GetHashCode () : int
    }

    class MaxCountStatus extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<MaxCountStatus> {

        public get TraitId(): string;
        public set TraitId(value: string);
        public get Name(): string;
        public set Name(value: string);
        public get CurrentCount(): System.Nullable$1<int>;
        public set CurrentCount(value: System.Nullable$1<int>);
        public get MaxCount(): System.Nullable$1<int>;
        public set MaxCount(value: System.Nullable$1<int>);
        public get ExpiresAt(): System.Nullable$1<int>;
        public set ExpiresAt(value: System.Nullable$1<int>);
        public get Source(): string;
        public set Source(value: string);
        public get OnCooldown(): System.Nullable$1<boolean>;
        public set OnCooldown(value: System.Nullable$1<boolean>);

        public constructor ($traitId?: string, $name?: string, $currentCount?: System.Nullable$1<int>, $maxCount?: System.Nullable$1<int>, $expiresAt?: System.Nullable$1<int>, $source?: string, $onCooldown?: System.Nullable$1<boolean>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: MaxCountStatus) : boolean
        public GetHashCode () : int
    }

    class AdminSetTraitScoreRequest extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<AdminSetTraitScoreRequest> {

        public get TraitId(): string;
        public set TraitId(value: string);
        public get Score(): System.Nullable$1<int>;
        public set Score(value: System.Nullable$1<int>);

        public constructor ($traitId?: string, $score?: System.Nullable$1<int>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: AdminSetTraitScoreRequest) : boolean
        public GetHashCode () : int
    }

    class CloudSaveCreateRequest extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<CloudSaveCreateRequest> {

        public get InstanceId(): string;
        public set InstanceId(value: string);
        public get Data(): string;
        public set Data(value: string);
        public get _Public(): System.Nullable$1<boolean>;
        public set _Public(value: System.Nullable$1<boolean>);

        public constructor ($instanceId?: string, $data?: string, $_public?: System.Nullable$1<boolean>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: CloudSaveCreateRequest) : boolean
        public GetHashCode () : int
    }

    class CloudSaveGetResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<CloudSaveGetResponse> {

        public get ExperienceId(): string;
        public set ExperienceId(value: string);
        public get InstanceId(): string;
        public set InstanceId(value: string);
        public get Data(): string;
        public set Data(value: string);

        public constructor ($experienceId?: string, $instanceId?: string, $data?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: CloudSaveGetResponse) : boolean
        public GetHashCode () : int
    }

    class Error extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<Error> {

        public get Message(): string;
        public set Message(value: string);

        public constructor ($message?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: Error) : boolean
        public GetHashCode () : int
    }

    class ErrorMessage extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<ErrorMessage> {

        public get Error(): string;
        public set Error(value: string);

        public constructor ($error?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: ErrorMessage) : boolean
        public GetHashCode () : int
    }

    class Gear extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<Gear> {

        public get Category(): System.Nullable$1<Genies_SDKServices_Model_Gear.CategoryEnum>;
        public set Category(value: System.Nullable$1<Genies_SDKServices_Model_Gear.CategoryEnum>);
        public get BuildStatus(): System.Nullable$1<Genies_SDKServices_Model_Gear.BuildStatusEnum>;
        public set BuildStatus(value: System.Nullable$1<Genies_SDKServices_Model_Gear.BuildStatusEnum>);
        public get Id(): string;
        public set Id(value: string);
        public get GearVersionId(): string;
        public set GearVersionId(value: string);
        public get IconUrl(): System_Collections_Generic.List$1<string>;
        public set IconUrl(value: System_Collections_Generic.List$1<string>);
        public get Status(): string;
        public set Status(value: string);
        public get SdkVersion(): System.Nullable$1<System.Decimal>;
        public set SdkVersion(value: System.Nullable$1<System.Decimal>);
        public get Name(): string;
        public set Name(value: string);
        public get Description(): string;
        public set Description(value: string);
        public get CmsId(): string;
        public set CmsId(value: string);
        public get ReviewerId(): string;
        public set ReviewerId(value: string);
        public get ReviewerComment(): string;
        public set ReviewerComment(value: string);
        public get S3Key(): string;
        public set S3Key(value: string);
        public get FullSdkVersion(): string;
        public set FullSdkVersion(value: string);
        public get CreatedAt(): System.Nullable$1<System.Decimal>;
        public set CreatedAt(value: System.Nullable$1<System.Decimal>);
        public get LastModifiedAt(): System.Nullable$1<System.Decimal>;
        public set LastModifiedAt(value: System.Nullable$1<System.Decimal>);
        public get ContentVersion(): System.Nullable$1<System.Decimal>;
        public set ContentVersion(value: System.Nullable$1<System.Decimal>);
        public get ErrorMessage(): string;
        public set ErrorMessage(value: string);
        public get RenderingUrl(): System_Collections_Generic.List$1<RenderingUrl>;
        public set RenderingUrl(value: System_Collections_Generic.List$1<RenderingUrl>);

        public constructor ($id?: string, $gearVersionId?: string, $iconUrl?: System_Collections_Generic.List$1<string>, $status?: string, $sdkVersion?: System.Nullable$1<System.Decimal>, $name?: string, $description?: string, $cmsId?: string, $reviewerId?: string, $reviewerComment?: string, $s3Key?: string, $fullSdkVersion?: string, $createdAt?: System.Nullable$1<System.Decimal>, $lastModifiedAt?: System.Nullable$1<System.Decimal>, $contentVersion?: System.Nullable$1<System.Decimal>, $category?: System.Nullable$1<Genies_SDKServices_Model_Gear.CategoryEnum>, $buildStatus?: System.Nullable$1<Genies_SDKServices_Model_Gear.BuildStatusEnum>, $errorMessage?: string, $renderingUrl?: System_Collections_Generic.List$1<RenderingUrl>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: Gear) : boolean
        public GetHashCode () : int
    }

    class RenderingUrl extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<RenderingUrl> {

        public get PreviewURL(): string;
        public set PreviewURL(value: string);
        public get VideoURL(): string;
        public set VideoURL(value: string);

        public constructor ($previewURL?: string, $videoURL?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: RenderingUrl) : boolean
        public GetHashCode () : int
    }

    class GearCreateRequest extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<GearCreateRequest> {

        public get Category(): System.Nullable$1<Genies_SDKServices_Model_GearCreateRequest.CategoryEnum>;
        public set Category(value: System.Nullable$1<Genies_SDKServices_Model_GearCreateRequest.CategoryEnum>);
        public get GearId(): string;
        public set GearId(value: string);
        public get Name(): string;
        public set Name(value: string);
        public get Description(): string;
        public set Description(value: string);

        public constructor ($gearId?: string, $name?: string, $description?: string, $category?: System.Nullable$1<Genies_SDKServices_Model_GearCreateRequest.CategoryEnum>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: GearCreateRequest) : boolean
        public GetHashCode () : int
    }

    class GearCreateResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<GearCreateResponse> {

        public get GearId(): string;
        public set GearId(value: string);
        public get GearVersionId(): string;
        public set GearVersionId(value: string);
        public get PresignedUrl(): string;
        public set PresignedUrl(value: string);

        public constructor ($gearId?: string, $gearVersionId?: string, $presignedUrl?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: GearCreateResponse) : boolean
        public GetHashCode () : int
    }

    class GearGetByIdResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<GearGetByIdResponse> {

        public get Category(): System.Nullable$1<Genies_SDKServices_Model_GearGetByIdResponse.CategoryEnum>;
        public set Category(value: System.Nullable$1<Genies_SDKServices_Model_GearGetByIdResponse.CategoryEnum>);
        public get BuildStatus(): System.Nullable$1<Genies_SDKServices_Model_GearGetByIdResponse.BuildStatusEnum>;
        public set BuildStatus(value: System.Nullable$1<Genies_SDKServices_Model_GearGetByIdResponse.BuildStatusEnum>);
        public get Id(): string;
        public set Id(value: string);
        public get GearVersionId(): string;
        public set GearVersionId(value: string);
        public get IconUrl(): System_Collections_Generic.List$1<string>;
        public set IconUrl(value: System_Collections_Generic.List$1<string>);
        public get Status(): string;
        public set Status(value: string);
        public get SdkVersion(): System.Nullable$1<System.Decimal>;
        public set SdkVersion(value: System.Nullable$1<System.Decimal>);
        public get Name(): string;
        public set Name(value: string);
        public get Description(): string;
        public set Description(value: string);
        public get CmsId(): string;
        public set CmsId(value: string);
        public get ReviewerId(): string;
        public set ReviewerId(value: string);
        public get ReviewerComment(): string;
        public set ReviewerComment(value: string);
        public get S3Key(): string;
        public set S3Key(value: string);
        public get FullSdkVersion(): string;
        public set FullSdkVersion(value: string);
        public get CreatedAt(): System.Nullable$1<System.Decimal>;
        public set CreatedAt(value: System.Nullable$1<System.Decimal>);
        public get LastModifiedAt(): System.Nullable$1<System.Decimal>;
        public set LastModifiedAt(value: System.Nullable$1<System.Decimal>);
        public get ContentVersion(): System.Nullable$1<System.Decimal>;
        public set ContentVersion(value: System.Nullable$1<System.Decimal>);
        public get ErrorMessage(): string;
        public set ErrorMessage(value: string);
        public get RenderingUrl(): System_Collections_Generic.List$1<RenderingUrl>;
        public set RenderingUrl(value: System_Collections_Generic.List$1<RenderingUrl>);

        public constructor ($id?: string, $gearVersionId?: string, $iconUrl?: System_Collections_Generic.List$1<string>, $status?: string, $sdkVersion?: System.Nullable$1<System.Decimal>, $name?: string, $description?: string, $cmsId?: string, $reviewerId?: string, $reviewerComment?: string, $s3Key?: string, $fullSdkVersion?: string, $createdAt?: System.Nullable$1<System.Decimal>, $lastModifiedAt?: System.Nullable$1<System.Decimal>, $contentVersion?: System.Nullable$1<System.Decimal>, $category?: System.Nullable$1<Genies_SDKServices_Model_GearGetByIdResponse.CategoryEnum>, $buildStatus?: System.Nullable$1<Genies_SDKServices_Model_GearGetByIdResponse.BuildStatusEnum>, $errorMessage?: string, $renderingUrl?: System_Collections_Generic.List$1<RenderingUrl>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: GearGetByIdResponse) : boolean
        public GetHashCode () : int
    }

    class GearListResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<GearListResponse> {

        public get Gears(): System_Collections_Generic.List$1<Gear>;
        public set Gears(value: System_Collections_Generic.List$1<Gear>);
        public get Cursor(): string;
        public set Cursor(value: string);

        public constructor ($gears?: System_Collections_Generic.List$1<Gear>, $cursor?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: GearListResponse) : boolean
        public GetHashCode () : int
    }

    class GearUpdateRequest extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<GearUpdateRequest> {

        public get Category(): System.Nullable$1<Genies_SDKServices_Model_GearUpdateRequest.CategoryEnum>;
        public set Category(value: System.Nullable$1<Genies_SDKServices_Model_GearUpdateRequest.CategoryEnum>);
        public get GearVersionId(): string;
        public set GearVersionId(value: string);
        public get Status(): string;
        public set Status(value: string);
        public get Name(): string;
        public set Name(value: string);
        public get Description(): string;
        public set Description(value: string);
        public get CmsId(): string;
        public set CmsId(value: string);
        public get ReviewerId(): string;
        public set ReviewerId(value: string);
        public get ReviewerComment(): string;
        public set ReviewerComment(value: string);
        public get S3Key(): string;
        public set S3Key(value: string);
        public get FullSdkVersion(): string;
        public set FullSdkVersion(value: string);
        public get CreatedAt(): System.Nullable$1<System.Decimal>;
        public set CreatedAt(value: System.Nullable$1<System.Decimal>);
        public get LastModifiedAt(): System.Nullable$1<System.Decimal>;
        public set LastModifiedAt(value: System.Nullable$1<System.Decimal>);
        public get ContentVersion(): System.Nullable$1<System.Decimal>;
        public set ContentVersion(value: System.Nullable$1<System.Decimal>);
        public get ErrorMessage(): string;
        public set ErrorMessage(value: string);
        public get IconUrl(): System_Collections_Generic.List$1<string>;
        public set IconUrl(value: System_Collections_Generic.List$1<string>);
        public get RenderingUrl(): System_Collections_Generic.List$1<RenderingUrl>;
        public set RenderingUrl(value: System_Collections_Generic.List$1<RenderingUrl>);

        public constructor ($gearVersionId?: string, $status?: string, $name?: string, $description?: string, $cmsId?: string, $reviewerId?: string, $reviewerComment?: string, $s3Key?: string, $fullSdkVersion?: string, $createdAt?: System.Nullable$1<System.Decimal>, $lastModifiedAt?: System.Nullable$1<System.Decimal>, $contentVersion?: System.Nullable$1<System.Decimal>, $category?: System.Nullable$1<Genies_SDKServices_Model_GearUpdateRequest.CategoryEnum>, $errorMessage?: string, $iconUrl?: System_Collections_Generic.List$1<string>, $renderingUrl?: System_Collections_Generic.List$1<RenderingUrl>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: GearUpdateRequest) : boolean
        public GetHashCode () : int
    }

    class Leaderboard extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<Leaderboard> {

        public get Type(): System.Nullable$1<Genies_SDKServices_Model_Leaderboard.TypeEnum>;
        public set Type(value: System.Nullable$1<Genies_SDKServices_Model_Leaderboard.TypeEnum>);
        public get ExperienceId(): string;
        public set ExperienceId(value: string);
        public get LeaderboardId(): string;
        public set LeaderboardId(value: string);
        public get Name(): string;
        public set Name(value: string);
        public get Description(): string;
        public set Description(value: string);
        public get CreateAt(): System.Nullable$1<System.Decimal>;
        public set CreateAt(value: System.Nullable$1<System.Decimal>);

        public constructor ($experienceId?: string, $leaderboardId?: string, $name?: string, $description?: string, $createAt?: System.Nullable$1<System.Decimal>, $type?: System.Nullable$1<Genies_SDKServices_Model_Leaderboard.TypeEnum>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: Leaderboard) : boolean
        public GetHashCode () : int
    }

    class LeaderboardCreateRequest extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<LeaderboardCreateRequest> {

        public get Type(): System.Nullable$1<Genies_SDKServices_Model_LeaderboardCreateRequest.TypeEnum>;
        public set Type(value: System.Nullable$1<Genies_SDKServices_Model_LeaderboardCreateRequest.TypeEnum>);
        public get Name(): string;
        public set Name(value: string);
        public get Description(): string;
        public set Description(value: string);

        public constructor ($name?: string, $description?: string, $type?: System.Nullable$1<Genies_SDKServices_Model_LeaderboardCreateRequest.TypeEnum>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: LeaderboardCreateRequest) : boolean
        public GetHashCode () : int
    }

    class LeaderboardCreateResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<LeaderboardCreateResponse> {

        public get LeaderboardId(): string;
        public set LeaderboardId(value: string);

        public constructor ($leaderboardId?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: LeaderboardCreateResponse) : boolean
        public GetHashCode () : int
    }

    class LeaderboardGetRanksResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<LeaderboardGetRanksResponse> {

        public get UserRanks(): System_Collections_Generic.List$1<LeaderboardUserRank>;
        public set UserRanks(value: System_Collections_Generic.List$1<LeaderboardUserRank>);
        public get Offset(): System.Nullable$1<System.Decimal>;
        public set Offset(value: System.Nullable$1<System.Decimal>);
        public get Limit(): System.Nullable$1<System.Decimal>;
        public set Limit(value: System.Nullable$1<System.Decimal>);

        public constructor ($userRanks?: System_Collections_Generic.List$1<LeaderboardUserRank>, $offset?: System.Nullable$1<System.Decimal>, $limit?: System.Nullable$1<System.Decimal>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: LeaderboardGetRanksResponse) : boolean
        public GetHashCode () : int
    }

    class LeaderboardUserRank extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<LeaderboardUserRank> {

        public get UserId(): string;
        public set UserId(value: string);
        public get Username(): string;
        public set Username(value: string);
        public get FirstName(): string;
        public set FirstName(value: string);
        public get LastName(): string;
        public set LastName(value: string);
        public get PrefUsername(): string;
        public set PrefUsername(value: string);
        public get ProfileUrl(): string;
        public set ProfileUrl(value: string);
        public get GameScore(): System.Nullable$1<int>;
        public set GameScore(value: System.Nullable$1<int>);
        public get HighestScore(): System.Nullable$1<int>;
        public set HighestScore(value: System.Nullable$1<int>);
        public get Rank(): System.Nullable$1<int>;
        public set Rank(value: System.Nullable$1<int>);
        public get LastActivityAt(): System.Nullable$1<System.Decimal>;
        public set LastActivityAt(value: System.Nullable$1<System.Decimal>);

        public constructor ($userId?: string, $username?: string, $firstName?: string, $lastName?: string, $prefUsername?: string, $profileUrl?: string, $gameScore?: System.Nullable$1<int>, $highestScore?: System.Nullable$1<int>, $rank?: System.Nullable$1<int>, $lastActivityAt?: System.Nullable$1<System.Decimal>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: LeaderboardUserRank) : boolean
        public GetHashCode () : int
    }

    class LeaderboardGetResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<LeaderboardGetResponse> {

        public get Leaderboards(): System_Collections_Generic.List$1<Leaderboard>;
        public set Leaderboards(value: System_Collections_Generic.List$1<Leaderboard>);
        public get NextCursor(): string;
        public set NextCursor(value: string);

        public constructor ($leaderboards?: System_Collections_Generic.List$1<Leaderboard>, $nextCursor?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: LeaderboardGetResponse) : boolean
        public GetHashCode () : int
    }

    class LeaderboardGetTopNRanksByGroupIdResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<LeaderboardGetTopNRanksByGroupIdResponse> {

        public get UserRanks(): System_Collections_Generic.List$1<LeaderboardUserRank>;
        public set UserRanks(value: System_Collections_Generic.List$1<LeaderboardUserRank>);

        public constructor ($userRanks?: System_Collections_Generic.List$1<LeaderboardUserRank>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: LeaderboardGetTopNRanksByGroupIdResponse) : boolean
        public GetHashCode () : int
    }

    class LeaderboardGetTopNRanksResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<LeaderboardGetTopNRanksResponse> {

        public get UserRanks(): System_Collections_Generic.List$1<LeaderboardUserRank>;
        public set UserRanks(value: System_Collections_Generic.List$1<LeaderboardUserRank>);

        public constructor ($userRanks?: System_Collections_Generic.List$1<LeaderboardUserRank>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: LeaderboardGetTopNRanksResponse) : boolean
        public GetHashCode () : int
    }

    class LeaderboardSubmitUserScoreRequest extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<LeaderboardSubmitUserScoreRequest> {

        public get Type(): System.Nullable$1<Genies_SDKServices_Model_LeaderboardSubmitUserScoreRequest.TypeEnum>;
        public set Type(value: System.Nullable$1<Genies_SDKServices_Model_LeaderboardSubmitUserScoreRequest.TypeEnum>);
        public get UserId(): string;
        public set UserId(value: string);
        public get ScoreIncrement(): System.Nullable$1<int>;
        public set ScoreIncrement(value: System.Nullable$1<int>);
        public get IdempotencyKey(): System.Nullable$1<System.Guid>;
        public set IdempotencyKey(value: System.Nullable$1<System.Guid>);
        public get Score(): System.Nullable$1<int>;
        public set Score(value: System.Nullable$1<int>);

        public constructor ($userId?: string, $scoreIncrement?: System.Nullable$1<int>, $idempotencyKey?: System.Nullable$1<System.Guid>, $score?: System.Nullable$1<int>, $type?: System.Nullable$1<Genies_SDKServices_Model_LeaderboardSubmitUserScoreRequest.TypeEnum>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: LeaderboardSubmitUserScoreRequest) : boolean
        public GetHashCode () : int
    }

    class LeaderboardSubmitUserScoreResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<LeaderboardSubmitUserScoreResponse> {

        public get GameScore(): System.Nullable$1<int>;
        public set GameScore(value: System.Nullable$1<int>);
        public get HighestScore(): System.Nullable$1<int>;
        public set HighestScore(value: System.Nullable$1<int>);

        public constructor ($gameScore?: System.Nullable$1<int>, $highestScore?: System.Nullable$1<int>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: LeaderboardSubmitUserScoreResponse) : boolean
        public GetHashCode () : int
    }

    class ListStoreItemsResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<ListStoreItemsResponse> {

        public get Items(): System_Collections_Generic.List$1<StoreItem>;
        public set Items(value: System_Collections_Generic.List$1<StoreItem>);

        public constructor ($items?: System_Collections_Generic.List$1<StoreItem>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: ListStoreItemsResponse) : boolean
        public GetHashCode () : int
    }

    class StoreItem extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<StoreItem> {

        public get ItemId(): string;
        public set ItemId(value: string);
        public get ItemType(): string;
        public set ItemType(value: string);
        public get Definition(): string;
        public set Definition(value: string);

        public constructor ($itemId?: string, $itemType?: string, $definition?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: StoreItem) : boolean
        public GetHashCode () : int
    }

    class ListStoresResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<ListStoresResponse> {

        public get StoreIds(): System_Collections_Generic.List$1<string>;
        public set StoreIds(value: System_Collections_Generic.List$1<string>);

        public constructor ($storeIds?: System_Collections_Generic.List$1<string>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: ListStoresResponse) : boolean
        public GetHashCode () : int
    }

    class MessageResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<MessageResponse> {

        public get Message(): string;
        public set Message(value: string);

        public constructor ($message?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: MessageResponse) : boolean
        public GetHashCode () : int
    }

    class RegisterStoreRequest extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<RegisterStoreRequest> {

        public get OwnerId(): string;
        public set OwnerId(value: string);

        public constructor ($ownerId?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: RegisterStoreRequest) : boolean
        public GetHashCode () : int
    }

    class RegisterStoreResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<RegisterStoreResponse> {

        public get StoreId(): string;
        public set StoreId(value: string);

        public constructor ($storeId?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: RegisterStoreResponse) : boolean
        public GetHashCode () : int
    }

    class StoreItemUpdate extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<StoreItemUpdate> {

        public get ItemId(): string;
        public set ItemId(value: string);
        public get ItemType(): string;
        public set ItemType(value: string);
        public get Definition(): string;
        public set Definition(value: string);

        public constructor ($itemId?: string, $itemType?: string, $definition?: string)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: StoreItemUpdate) : boolean
        public GetHashCode () : int
    }

    class StoreItemUpdates extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<StoreItemUpdates> {

        public get Operation(): System.Nullable$1<Genies_SDKServices_Model_StoreItemUpdates.OperationEnum>;
        public set Operation(value: System.Nullable$1<Genies_SDKServices_Model_StoreItemUpdates.OperationEnum>);
        public get Items(): System_Collections_Generic.List$1<StoreItemUpdate>;
        public set Items(value: System_Collections_Generic.List$1<StoreItemUpdate>);

        public constructor ($operation?: System.Nullable$1<Genies_SDKServices_Model_StoreItemUpdates.OperationEnum>, $items?: System_Collections_Generic.List$1<StoreItemUpdate>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: StoreItemUpdates) : boolean
        public GetHashCode () : int
    }

    class Trait extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<Trait> {

        public get Type(): System.Nullable$1<Genies_SDKServices_Model_Trait.TypeEnum>;
        public set Type(value: System.Nullable$1<Genies_SDKServices_Model_Trait.TypeEnum>);
        public get Status(): System.Nullable$1<Genies_SDKServices_Model_Trait.StatusEnum>;
        public set Status(value: System.Nullable$1<Genies_SDKServices_Model_Trait.StatusEnum>);
        public get Id(): string;
        public set Id(value: string);
        public get Name(): string;
        public set Name(value: string);
        public get Description(): string;
        public set Description(value: string);
        public get IconUrl(): string;
        public set IconUrl(value: string);
        public get Version(): System.Nullable$1<System.Decimal>;
        public set Version(value: System.Nullable$1<System.Decimal>);
        public get CmsId(): string;
        public set CmsId(value: string);
        public get OppositeTraitId(): string;
        public set OppositeTraitId(value: string);
        public get ArchetypeId(): string;
        public set ArchetypeId(value: string);
        public get ArchetypeName(): string;
        public set ArchetypeName(value: string);
        public get ArchetypeColor(): string;
        public set ArchetypeColor(value: string);
        public get OppositeArchetypeId(): string;
        public set OppositeArchetypeId(value: string);
        public get ArchetypeDescription(): string;
        public set ArchetypeDescription(value: string);
        public get LastModifiedAt(): System.Nullable$1<System.Decimal>;
        public set LastModifiedAt(value: System.Nullable$1<System.Decimal>);

        public constructor ($id?: string, $name?: string, $type?: System.Nullable$1<Genies_SDKServices_Model_Trait.TypeEnum>, $description?: string, $iconUrl?: string, $version?: System.Nullable$1<System.Decimal>, $status?: System.Nullable$1<Genies_SDKServices_Model_Trait.StatusEnum>, $cmsId?: string, $oppositeTraitId?: string, $archetypeId?: string, $archetypeName?: string, $archetypeColor?: string, $oppositeArchetypeId?: string, $archetypeDescription?: string, $lastModifiedAt?: System.Nullable$1<System.Decimal>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: Trait) : boolean
        public GetHashCode () : int
    }

    class TraitSignalRequest extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<TraitSignalRequest> {

        public get Source(): Genies_SDKServices_Model_TraitSignalRequest.SourceEnum;
        public set Source(value: Genies_SDKServices_Model_TraitSignalRequest.SourceEnum);
        public get SmartAssetId(): string;
        public set SmartAssetId(value: string);
        public get Equip(): System.Nullable$1<boolean>;
        public set Equip(value: System.Nullable$1<boolean>);
        public get TraitIds(): System_Collections_Generic.List$1<string>;
        public set TraitIds(value: System_Collections_Generic.List$1<string>);
        public get IdempotencyKey(): System.Nullable$1<System.Guid>;
        public set IdempotencyKey(value: System.Nullable$1<System.Guid>);
        public get ExperienceId(): System.Nullable$1<System.Guid>;
        public set ExperienceId(value: System.Nullable$1<System.Guid>);

        public constructor ($source?: Genies_SDKServices_Model_TraitSignalRequest.SourceEnum, $smartAssetId?: string, $equip?: System.Nullable$1<boolean>, $traitIds?: System_Collections_Generic.List$1<string>, $idempotencyKey?: System.Nullable$1<System.Guid>, $experienceId?: System.Nullable$1<System.Guid>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: TraitSignalRequest) : boolean
        public GetHashCode () : int
    }

    class TraitsGetResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<TraitsGetResponse> {

        public get Traits(): System_Collections_Generic.List$1<Trait>;
        public set Traits(value: System_Collections_Generic.List$1<Trait>);

        public constructor ($traits?: System_Collections_Generic.List$1<Trait>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: TraitsGetResponse) : boolean
        public GetHashCode () : int
    }

    class UserStoreItemUpdates extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<UserStoreItemUpdates> {

        public get Operation(): System.Nullable$1<Genies_SDKServices_Model_UserStoreItemUpdates.OperationEnum>;
        public set Operation(value: System.Nullable$1<Genies_SDKServices_Model_UserStoreItemUpdates.OperationEnum>);
        public get StoreId(): string;
        public set StoreId(value: string);
        public get Items(): System_Collections_Generic.List$1<StoreItemUpdate>;
        public set Items(value: System_Collections_Generic.List$1<StoreItemUpdate>);

        public constructor ($operation?: System.Nullable$1<Genies_SDKServices_Model_UserStoreItemUpdates.OperationEnum>, $storeId?: string, $items?: System_Collections_Generic.List$1<StoreItemUpdate>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: UserStoreItemUpdates) : boolean
        public GetHashCode () : int
    }

    class UserTraitsGetResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<UserTraitsGetResponse> {

        public get Traits(): System_Collections_Generic.List$1<UserTraitsGetResponseTraits>;
        public set Traits(value: System_Collections_Generic.List$1<UserTraitsGetResponseTraits>);

        public constructor ($traits?: System_Collections_Generic.List$1<UserTraitsGetResponseTraits>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: UserTraitsGetResponse) : boolean
        public GetHashCode () : int
    }

    class UserTraitsGetResponseTraits extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<UserTraitsGetResponseTraits> {

        public get Type(): System.Nullable$1<Genies_SDKServices_Model_UserTraitsGetResponseTraits.TypeEnum>;
        public set Type(value: System.Nullable$1<Genies_SDKServices_Model_UserTraitsGetResponseTraits.TypeEnum>);
        public get Id(): string;
        public set Id(value: string);
        public get CmsId(): string;
        public set CmsId(value: string);
        public get Name(): string;
        public set Name(value: string);
        public get Score(): System.Nullable$1<System.Decimal>;
        public set Score(value: System.Nullable$1<System.Decimal>);

        public constructor ($id?: string, $type?: System.Nullable$1<Genies_SDKServices_Model_UserTraitsGetResponseTraits.TypeEnum>, $cmsId?: string, $name?: string, $score?: System.Nullable$1<System.Decimal>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: UserTraitsGetResponseTraits) : boolean
        public GetHashCode () : int
    }

    class UserTraitsHistoryResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<UserTraitsHistoryResponse> {

        public get Profile(): System_Collections_Generic.List$1<UserTraitsHistoryResponseProfile>;
        public set Profile(value: System_Collections_Generic.List$1<UserTraitsHistoryResponseProfile>);
        public get LastModifiedAt(): System.Nullable$1<int>;
        public set LastModifiedAt(value: System.Nullable$1<int>);

        public constructor ($profile?: System_Collections_Generic.List$1<UserTraitsHistoryResponseProfile>, $lastModifiedAt?: System.Nullable$1<int>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: UserTraitsHistoryResponse) : boolean
        public GetHashCode () : int
    }

    class UserTraitsHistoryResponseProfile extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<UserTraitsHistoryResponseProfile> {

        public get Trait(): Trait;
        public set Trait(value: Trait);
        public get Value(): System.Nullable$1<System.Decimal>;
        public set Value(value: System.Nullable$1<System.Decimal>);
        public get LastModifiedAt(): System.Nullable$1<System.Decimal>;
        public set LastModifiedAt(value: System.Nullable$1<System.Decimal>);

        public constructor ($trait?: Trait, $value?: System.Nullable$1<System.Decimal>, $lastModifiedAt?: System.Nullable$1<System.Decimal>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: UserTraitsHistoryResponseProfile) : boolean
        public GetHashCode () : int
    }

    class UserTraitsResponse extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<UserTraitsResponse> {

        public get Profile(): System_Collections_Generic.List$1<UserTraitsResponseProfile>;
        public set Profile(value: System_Collections_Generic.List$1<UserTraitsResponseProfile>);
        public get LastModifiedAt(): System.Nullable$1<int>;
        public set LastModifiedAt(value: System.Nullable$1<int>);

        public constructor ($profile?: System_Collections_Generic.List$1<UserTraitsResponseProfile>, $lastModifiedAt?: System.Nullable$1<int>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: UserTraitsResponse) : boolean
        public GetHashCode () : int
    }

    class UserTraitsResponseProfile extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<UserTraitsResponseProfile> {

        public get Trait(): Trait;
        public set Trait(value: Trait);
        public get Value(): System.Nullable$1<System.Decimal>;
        public set Value(value: System.Nullable$1<System.Decimal>);

        public constructor ($trait?: Trait, $value?: System.Nullable$1<System.Decimal>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: UserTraitsResponseProfile) : boolean
        public GetHashCode () : int
    }

    class UserTraitsUpdate extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<UserTraitsUpdate> {

        public get Traits(): System_Collections_Generic.List$1<UserTraitsUpdateTraits>;
        public set Traits(value: System_Collections_Generic.List$1<UserTraitsUpdateTraits>);

        public constructor ($traits?: System_Collections_Generic.List$1<UserTraitsUpdateTraits>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: UserTraitsUpdate) : boolean
        public GetHashCode () : int
    }

    class UserTraitsUpdateTraits extends System.Object implements System_ComponentModel_DataAnnotations.IValidatableObject, System.IEquatable$1<UserTraitsUpdateTraits> {

        public get Size(): System.Nullable$1<Genies_SDKServices_Model_UserTraitsUpdateTraits.SizeEnum>;
        public set Size(value: System.Nullable$1<Genies_SDKServices_Model_UserTraitsUpdateTraits.SizeEnum>);
        public get Id(): string;
        public set Id(value: string);

        public constructor ($id?: string, $size?: System.Nullable$1<Genies_SDKServices_Model_UserTraitsUpdateTraits.SizeEnum>)
        public ToString () : string
        public ToJson () : string
        public Equals ($input: any) : boolean
        public Equals ($input: UserTraitsUpdateTraits) : boolean
        public GetHashCode () : int
    }

}

declare module 'System.ComponentModel.DataAnnotations' {

    interface IValidatableObject {

    }

}

declare module 'System' {
    import * as System_Runtime_Serialization from 'System.Runtime.Serialization'

    interface IEquatable$1<T> {

        Equals? ($other: T) : boolean
    }

    interface Nullable$1<T> {

    }

    interface IDisposable {

    }

    interface Converter$2<TInput,TOutput> {
        (input: TInput) : TOutput; 
        Invoke?: (input: TInput) => TOutput;
    }

    interface MulticastDelegate {
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
    }
    var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }

    interface Delegate extends ICloneable, System_Runtime_Serialization.ISerializable {

    }

    interface ICloneable {

    }

    interface Predicate$1<T> {
        (obj: T) : boolean; 
        Invoke?: (obj: T) => boolean;
    }

    interface Action$1<T> {
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
    }

    interface Comparison$1<T> {
        (x: T, y: T) : int; 
        Invoke?: (x: T, y: T) => int;
    }

    interface Decimal extends IFormattable, ISpanFormattable, IComparable, System_Runtime_Serialization.IDeserializationCallback, IComparable$1<Decimal>, IConvertible, IEquatable$1<Decimal> {

    }

    interface IFormattable {

    }

    interface IComparable {

    }

    interface IComparable$1<T> {

    }

    interface IConvertible {

    }

    interface Enum extends IFormattable, IComparable, IConvertible {

    }

    interface Guid extends IFormattable, ISpanFormattable, IComparable, IComparable$1<Guid>, IEquatable$1<Guid> {

    }

}

declare module 'System.Collections.Generic' {
    import * as System from 'System'
    import * as System_Collections from 'System.Collections'
    import * as System_Collections_ObjectModel from 'System.Collections.ObjectModel'
    import * as System_Collections_Generic_List$1 from 'System.Collections.Generic.List$1'

    class List$1<T> extends System.Object implements IList$1<T>, System_Collections.IList, IReadOnlyList$1<T> {

        public get Capacity(): int;
        public set Capacity(value: int);
        public get Count(): int;

        public constructor ()
        public constructor ($capacity: int)
        public constructor ($collection: IEnumerable$1<T>)
        public Add ($item: T) : void
        public AddRange ($collection: IEnumerable$1<T>) : void
        public AsReadOnly () : System_Collections_ObjectModel.ReadOnlyCollection$1<T>
        /**
        * @methodSwap BinarySearch_EBB7509C_H666473CF
        */
        public BinarySearch ($index: int, $count: int, $item: T, $comparer: IComparer$1<T>) : int
        public BinarySearch ($item: T) : int
        public BinarySearch ($item: T, $comparer: IComparer$1<T>) : int
        public Clear () : void
        public Contains ($item: T) : boolean
        public ConvertAll<TOutput> ($converter: System.Converter$2<T, TOutput>) : List$1<TOutput>
        public CopyTo ($array: T[]) : void
        /**
        * @methodSwap CopyTo_EBB7509C_F4E13BEA
        */
        public CopyTo ($index: int, $array: T[], $arrayIndex: int, $count: int) : void
        /**
        * @methodSwap CopyTo_EBB7509C_H67B06CE6
        */
        public CopyTo ($array: T[], $arrayIndex: int) : void
        public Exists ($match: System.Predicate$1<T>) : boolean
        public Find ($match: System.Predicate$1<T>) : T
        public FindAll ($match: System.Predicate$1<T>) : List$1<T>
        public FindIndex ($match: System.Predicate$1<T>) : int
        /**
        * @methodSwap FindIndex_EBB7509C_H73E258F1
        */
        public FindIndex ($startIndex: int, $match: System.Predicate$1<T>) : int
        /**
        * @methodSwap FindIndex_EBB7509C_A0F1585A
        */
        public FindIndex ($startIndex: int, $count: int, $match: System.Predicate$1<T>) : int
        public FindLast ($match: System.Predicate$1<T>) : T
        public FindLastIndex ($match: System.Predicate$1<T>) : int
        /**
        * @methodSwap FindLastIndex_EBB7509C_H73E258F1
        */
        public FindLastIndex ($startIndex: int, $match: System.Predicate$1<T>) : int
        /**
        * @methodSwap FindLastIndex_EBB7509C_A0F1585A
        */
        public FindLastIndex ($startIndex: int, $count: int, $match: System.Predicate$1<T>) : int
        public ForEach ($action: System.Action$1<T>) : void
        public GetEnumerator () : System_Collections_Generic_List$1.Enumerator<T>
        public GetRange ($index: int, $count: int) : List$1<T>
        public IndexOf ($item: T) : int
        /**
        * @methodSwap IndexOf_EBB7509C_H6D080506
        */
        public IndexOf ($item: T, $index: int) : int
        /**
        * @methodSwap IndexOf_EBB7509C_H98F5CA19
        */
        public IndexOf ($item: T, $index: int, $count: int) : int
        public Insert ($index: int, $item: T) : void
        public InsertRange ($index: int, $collection: IEnumerable$1<T>) : void
        public LastIndexOf ($item: T) : int
        /**
        * @methodSwap LastIndexOf_EBB7509C_H6D080506
        */
        public LastIndexOf ($item: T, $index: int) : int
        /**
        * @methodSwap LastIndexOf_EBB7509C_H98F5CA19
        */
        public LastIndexOf ($item: T, $index: int, $count: int) : int
        public Remove ($item: T) : boolean
        public RemoveAll ($match: System.Predicate$1<T>) : int
        public RemoveAt ($index: int) : void
        public RemoveRange ($index: int, $count: int) : void
        public Reverse () : void
        /**
        * @methodSwap Reverse_EBB7509C_H2CFB2EE5
        */
        public Reverse ($index: int, $count: int) : void
        public Sort () : void
        public Sort ($comparer: IComparer$1<T>) : void
        /**
        * @methodSwap Sort_EBB7509C_C2F3E73B
        */
        public Sort ($index: int, $count: int, $comparer: IComparer$1<T>) : void
        public Sort ($comparison: System.Comparison$1<T>) : void
        public ToArray () : T[]
        public TrimExcess () : void
        public TrueForAll ($match: System.Predicate$1<T>) : boolean
        public get_Item ($index: int) : T
        public set_Item ($index: int, $value: T) : void
        public [Symbol.iterator]() : IterableIterator<T>
    }

    interface IList$1<T> extends ICollection$1<T> {

        IndexOf? ($item: T) : int
        Insert? ($index: int, $item: T) : void
        RemoveAt? ($index: int) : void
        get_Item? ($index: int) : T
        set_Item? ($index: int, $value: T) : void
    }

    interface ICollection$1<T> extends IEnumerable$1<T> {

        readonly Count? : int
        readonly IsReadOnly? : boolean

        Add? ($item: T) : void
        Clear? () : void
        Contains? ($item: T) : boolean
        CopyTo? ($array: T[], $arrayIndex: int) : void
        Remove? ($item: T) : boolean
    }

    interface IEnumerable$1<T> extends System_Collections.IEnumerable {

        GetEnumerator? () : IEnumerator$1<T>
    }

    interface IEnumerator$1<T> extends System_Collections.IEnumerator, System.IDisposable {

    }

    interface IReadOnlyList$1<T> extends IReadOnlyCollection$1<T> {

        get_Item? ($index: int) : T
    }

    interface IReadOnlyCollection$1<T> extends IEnumerable$1<T> {

        readonly Count? : int

    }

    interface IComparer$1<T> {

    }

}

declare module 'System.Collections' {

    interface IEnumerable {

    }

    interface IEnumerator {

    }

    interface IList extends ICollection {

    }

    interface ICollection extends IEnumerable {

    }

}

declare module 'System.Collections.ObjectModel' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'
    import * as System_Collections from 'System.Collections'

    interface ReadOnlyCollection$1<T> extends System_Collections_Generic.IList$1<T>, System_Collections.IList, System_Collections_Generic.IReadOnlyList$1<T> {

    }

}

declare module 'System.Runtime.Serialization' {

    interface ISerializable {

    }

    interface IDeserializationCallback {

    }

}

declare module 'System.Collections.Generic.List$1' {
    import * as System from 'System'
    import * as System_Collections_Generic from 'System.Collections.Generic'

    interface Enumerator<T> extends System_Collections_Generic.IEnumerator$1<T> {

    }

}

declare module 'Genies.SDKServices.Model.Gear' {

    enum CategoryEnum {
        NOCATEGORY = 1,
        BRACELETS = 2,
        DRESSES = 3,
        EARRINGS = 4,
        GLASSES = 5,
        HATS = 6,
        HOODIES = 7,
        JACKETS = 8,
        MASKS = 9,
        PANTS = 10,
        SHIRTS = 11,
        SHOES = 12,
        SHORTS = 13,
        SKIRTS = 14 
    }

    enum BuildStatusEnum {
        QUEUED = 1,
        FAILED = 2,
        WARNING = 3,
        SUCCESS = 4,
        PREVIEWSRENDERED = 5 
    }

}

declare module 'Genies.SDKServices.Model.GearCreateRequest' {

    enum CategoryEnum {
        NOCATEGORY = 1,
        HOODIE = 2,
        SHIRT = 3,
        JACKET = 4,
        DRESS = 5,
        PANTS = 6,
        SHORTS = 7,
        SKIRT = 8,
        SHOES = 9,
        EARRINGS = 10,
        GLASSES = 11,
        HAT = 12,
        MASK = 13 
    }

}

declare module 'Genies.SDKServices.Model.GearGetByIdResponse' {

    enum CategoryEnum {
        NOCATEGORY = 1,
        BRACELETS = 2,
        DRESSES = 3,
        EARRINGS = 4,
        GLASSES = 5,
        HATS = 6,
        HOODIES = 7,
        JACKETS = 8,
        MASKS = 9,
        PANTS = 10,
        SHIRTS = 11,
        SHOES = 12,
        SHORTS = 13,
        SKIRTS = 14 
    }

    enum BuildStatusEnum {
        QUEUED = 1,
        FAILED = 2,
        WARNING = 3,
        SUCCESS = 4,
        PREVIEWSRENDERED = 5 
    }

}

declare module 'Genies.SDKServices.Model.GearUpdateRequest' {

    enum CategoryEnum {
        NOCATEGORY = 1,
        BRACELETS = 2,
        DRESSES = 3,
        EARRINGS = 4,
        GLASSES = 5,
        HATS = 6,
        HOODIES = 7,
        JACKETS = 8,
        MASKS = 9,
        PANTS = 10,
        SHIRTS = 11,
        SHOES = 12,
        SHORTS = 13,
        SKIRTS = 14 
    }

}

declare module 'Genies.SDKServices.Model.Leaderboard' {

    enum TypeEnum {
        CURRENTSCORE = 1,
        HIGHESTSCORE = 2 
    }

}

declare module 'Genies.SDKServices.Model.LeaderboardCreateRequest' {

    enum TypeEnum {
        CURRENTSCORE = 1,
        HIGHESTSCORE = 2 
    }

}

declare module 'Genies.SDKServices.Model.LeaderboardSubmitUserScoreRequest' {

    enum TypeEnum {
        INCREMENTAL = 1,
        DIRECT = 2 
    }

}

declare module 'Genies.SDKServices.Model.StoreItemUpdates' {

    enum OperationEnum {
        ADD = 1,
        REMOVE = 2 
    }

}

declare module 'Genies.SDKServices.Model.Trait' {

    enum TypeEnum {
        EMOTIONAL = 1,
        MENTAL = 2,
        EXPRESSIVE = 3,
        SOCIAL = 4 
    }

    enum StatusEnum {
        ACTIVE = 1,
        INACTIVE = 2 
    }

}

declare module 'Genies.SDKServices.Model.TraitSignalRequest' {

    enum SourceEnum {
        EXPMICRO = 1,
        EXPCORE = 2,
        EXPEMOTE = 3,
        EXPSOCIAL = 4,
        EXPMETA = 5,
        EXPCONDITIONLARGE = 6,
        EXPCONDITIONMEDIUM = 7,
        EXPCONDITIONSMALL = 8,
        EXPROLE = 9,
        SPACEEQUIPWEARABLE = 10,
        SPACEEQUIPHANDPROP = 11,
        SPACEEQUIPAVATAR = 12,
        EXPEQUIPWEARABLE = 13,
        EXPEQUIPHANDPROP = 14,
        EXPEQUIPAVATAR = 15 
    }

}

declare module 'Genies.SDKServices.Model.UserStoreItemUpdates' {

    enum OperationEnum {
        ADD = 1,
        REMOVE = 2 
    }

}

declare module 'Genies.SDKServices.Model.UserTraitsGetResponseTraits' {

    enum TypeEnum {
        PERSONAL = 1,
        PHYSICAL = 2,
        EXPRESS = 3 
    }

}

declare module 'Genies.SDKServices.Model.UserTraitsUpdateTraits' {

    enum SizeEnum {
        S = 1,
        M = 2,
        L = 3 
    }

}

