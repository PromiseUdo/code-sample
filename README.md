# JA Africa Project

This is the frontend implementation of the JAA Platform, which enables alumni of the institution to have engagement with other alumnis and have engagement with recruiters who come to the platform. This implementation also include the administrative view which enables the administrator to manage the platform and draw insights from the system.

This also includes the landing page of JAA, thus everybody who visits the platform can get an overview of what the system is all about.

## Implementation view of the system

The following diagram is the capture of the system as of 11/06/2023. This show generally how the system is structure on the frontend view.

```
jaa-frontend
├─ .eslintrc.js
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ README.md
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ prettier.config.js
├─ public
│  ├─ android-chrome-192x192.png
│  ├─ android-chrome-512x512.png
│  ├─ apple-touch-icon.png
│  ├─ defaultImage.png
│  ├─ defaultImage1.png
│  ├─ favicon-16x16.png
│  ├─ favicon-32x32.png
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ jaa.png
│  ├─ manifest.json
│  └─ robots.txt
├─ src
│  ├─ App.tsx
│  ├─ CombineProviders.tsx
│  ├─ apis
│  │  ├─ alumniApis.ts
│  │  ├─ api.ts
│  │  ├─ api.types.ts
│  │  ├─ auditLogApis.ts
│  │  ├─ authApis.ts
│  │  ├─ constants
│  │  │  └─ apiStatus.ts
│  │  ├─ constants.ts
│  │  ├─ dashboardApis.ts
│  │  ├─ endpoints.ts
│  │  ├─ engagementApis.ts
│  │  ├─ forumApis.ts
│  │  ├─ hooks
│  │  │  ├─ useApiStatus.ts
│  │  │  ├─ useAutomaticRefresh.ts
│  │  │  ├─ useBlock.ts
│  │  │  ├─ useLogout.ts
│  │  │  └─ useRefreshToken.ts
│  │  ├─ languageApis.ts
│  │  ├─ notificationApis.ts
│  │  ├─ optionsApis.ts
│  │  ├─ profileApis.ts
│  │  ├─ ratingApis.ts
│  │  ├─ recruitementApis.ts
│  │  ├─ recruitersApis.ts
│  │  ├─ reportApis.ts
│  │  └─ testApis.ts
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ audit
│  │  │  │  ├─ checked.svg
│  │  │  │  └─ unchecked.svg
│  │  │  ├─ engagement
│  │  │  │  └─ nochat.svg
│  │  │  ├─ forum
│  │  │  │  ├─ Batch1.png
│  │  │  │  ├─ Batch2.png
│  │  │  │  ├─ Batch3.png
│  │  │  │  ├─ Batch4.png
│  │  │  │  ├─ Batch5.png
│  │  │  │  ├─ Batch6.png
│  │  │  │  ├─ Batch7.png
│  │  │  │  ├─ bargebase1.svg
│  │  │  │  ├─ bargebase2.svg
│  │  │  │  ├─ bold.svg
│  │  │  │  ├─ checked-radio.svg
│  │  │  │  ├─ comment-alt.png
│  │  │  │  ├─ comment-alt.svg
│  │  │  │  ├─ comment.svg
│  │  │  │  ├─ downvote.svg
│  │  │  │  ├─ general.png
│  │  │  │  ├─ image.svg
│  │  │  │  ├─ italize.svg
│  │  │  │  ├─ orderedlist.svg
│  │  │  │  ├─ send.svg
│  │  │  │  ├─ share.svg
│  │  │  │  ├─ strike.svg
│  │  │  │  ├─ tip.svg
│  │  │  │  ├─ unchecked-radio.svg
│  │  │  │  ├─ unorderedlist.svg
│  │  │  │  ├─ upvote.svg
│  │  │  │  ├─ video.svg
│  │  │  │  └─ warn.svg
│  │  │  ├─ iconComponents.ts
│  │  │  ├─ iconUrls.ts
│  │  │  ├─ landingpage
│  │  │  │  ├─ arrow.svg
│  │  │  │  ├─ briefcase.svg
│  │  │  │  ├─ caret.svg
│  │  │  │  ├─ cat.svg
│  │  │  │  ├─ cisco.svg
│  │  │  │  ├─ exon.svg
│  │  │  │  ├─ fbook.svg
│  │  │  │  ├─ feed.svg
│  │  │  │  ├─ firstbank.svg
│  │  │  │  ├─ force.svg
│  │  │  │  ├─ google.svg
│  │  │  │  ├─ insta.svg
│  │  │  │  ├─ jaa-hero.svg
│  │  │  │  ├─ jaa-logo.png.svg
│  │  │  │  ├─ linkdn.svg
│  │  │  │  ├─ logo.svg
│  │  │  │  ├─ microsoft.svg
│  │  │  │  ├─ profile.png
│  │  │  │  ├─ profile.svg
│  │  │  │  ├─ profileIcon.svg
│  │  │  │  ├─ recruiter.svg
│  │  │  │  ├─ twitter.svg
│  │  │  │  ├─ unilever.svg
│  │  │  │  └─ ytube.svg
│  │  │  ├─ language
│  │  │  │  ├─ en.svg
│  │  │  │  └─ fr.svg
│  │  │  ├─ navigation
│  │  │  │  ├─ alumni.svg
│  │  │  │  ├─ auditlogs.svg
│  │  │  │  ├─ dashboard.svg
│  │  │  │  ├─ engagement.svg
│  │  │  │  ├─ forum.svg
│  │  │  │  ├─ logout.svg
│  │  │  │  ├─ messages.svg
│  │  │  │  ├─ recruitement.svg
│  │  │  │  ├─ recruiters.svg
│  │  │  │  ├─ reports.svg
│  │  │  │  ├─ setting.png
│  │  │  │  ├─ settings.svg
│  │  │  │  └─ skilltest.svg
│  │  │  ├─ profile
│  │  │  │  ├─ briefcase.svg
│  │  │  │  ├─ changepic.svg
│  │  │  │  ├─ checkbox.svg
│  │  │  │  ├─ document.svg
│  │  │  │  ├─ education.svg
│  │  │  │  ├─ empty.svg
│  │  │  │  ├─ emptyfile.svg
│  │  │  │  ├─ experience.svg
│  │  │  │  ├─ facebook.svg
│  │  │  │  ├─ figma.svg
│  │  │  │  ├─ figmacolor.svg
│  │  │  │  ├─ filledstar.svg
│  │  │  │  ├─ french.svg
│  │  │  │  ├─ instagram.svg
│  │  │  │  ├─ keyopen.svg
│  │  │  │  ├─ linkedin.svg
│  │  │  │  ├─ makedefault.svg
│  │  │  │  ├─ moneystack.svg
│  │  │  │  ├─ nigeria.svg
│  │  │  │  ├─ outlinedstar.svg
│  │  │  │  ├─ playvideo.svg
│  │  │  │  ├─ profileedit.svg
│  │  │  │  ├─ radiochecked.svg
│  │  │  │  ├─ radiounchecked.svg
│  │  │  │  ├─ resumethumbnail.png
│  │  │  │  ├─ successmark.svg
│  │  │  │  ├─ twitter.svg
│  │  │  │  ├─ uncheckbox.svg
│  │  │  │  └─ workexperience.png
│  │  │  ├─ recruitment
│  │  │  │  ├─ archive.png
│  │  │  │  ├─ archive.svg
│  │  │  │  ├─ building.svg
│  │  │  │  ├─ check.svg
│  │  │  │  ├─ compress.svg
│  │  │  │  ├─ education.svg
│  │  │  │  ├─ empty.svg
│  │  │  │  ├─ emptysearch.svg
│  │  │  │  ├─ envelope.svg
│  │  │  │  ├─ expand.svg
│  │  │  │  ├─ experience.svg
│  │  │  │  ├─ jobs.svg
│  │  │  │  ├─ messages.svg
│  │  │  │  ├─ mute.svg
│  │  │  │  ├─ pause.svg
│  │  │  │  ├─ pipeline.svg
│  │  │  │  ├─ play.svg
│  │  │  │  ├─ portfolio.svg
│  │  │  │  ├─ preference.svg
│  │  │  │  ├─ skills.svg
│  │  │  │  ├─ star.svg
│  │  │  │  ├─ uncheck.svg
│  │  │  │  └─ useralt.png
│  │  │  ├─ reports
│  │  │  │  ├─ comment.svg
│  │  │  │  ├─ likes.svg
│  │  │  │  ├─ post.svg
│  │  │  │  └─ reported.svg
│  │  │  ├─ skill_test
│  │  │  │  ├─ cloudupload.svg
│  │  │  │  ├─ completed.svg
│  │  │  │  ├─ defaultupload.svg
│  │  │  │  ├─ filter.svg
│  │  │  │  ├─ radiochecked.svg
│  │  │  │  ├─ top10.svg
│  │  │  │  ├─ top20.svg
│  │  │  │  ├─ top30.svg
│  │  │  │  ├─ top5.svg
│  │  │  │  └─ warning.svg
│  │  │  ├─ toast
│  │  │  │  ├─ error.svg
│  │  │  │  ├─ info.svg
│  │  │  │  ├─ success.svg
│  │  │  │  └─ warn.svg
│  │  │  └─ utils
│  │  │     ├─ add.svg
│  │  │     ├─ addcircle.svg
│  │  │     ├─ addfile.svg
│  │  │     ├─ arrowdown.svg
│  │  │     ├─ arrowleft.svg
│  │  │     ├─ arrowright.svg
│  │  │     ├─ arrowupright.svg
│  │  │     ├─ calendar.svg
│  │  │     ├─ cancel.svg
│  │  │     ├─ checked.svg
│  │  │     ├─ checkmark.svg
│  │  │     ├─ chevrondown.svg
│  │  │     ├─ chevronleft.svg
│  │  │     ├─ chevronright.svg
│  │  │     ├─ delete.svg
│  │  │     ├─ download.svg
│  │  │     ├─ dropdown.svg
│  │  │     ├─ edit.svg
│  │  │     ├─ email.svg
│  │  │     ├─ expand.svg
│  │  │     ├─ eyeclose.svg
│  │  │     ├─ eyeopen.svg
│  │  │     ├─ filter.svg
│  │  │     ├─ globe.svg
│  │  │     ├─ good.svg
│  │  │     ├─ import.svg
│  │  │     ├─ indeterminate.svg
│  │  │     ├─ info.svg
│  │  │     ├─ key.svg
│  │  │     ├─ location.svg
│  │  │     ├─ logo.svg
│  │  │     ├─ maximize.svg
│  │  │     ├─ menu.svg
│  │  │     ├─ message.svg
│  │  │     ├─ morehoriz.svg
│  │  │     ├─ morevert.svg
│  │  │     ├─ notification.svg
│  │  │     ├─ search.svg
│  │  │     ├─ twouser.svg
│  │  │     ├─ twouseralt.png
│  │  │     ├─ unchecked.svg
│  │  │     ├─ unevenbars.svg
│  │  │     ├─ unlock.svg
│  │  │     ├─ upload.svg
│  │  │     ├─ user.svg
│  │  │     ├─ useralt.svg
│  │  │     └─ usercancel.svg
│  │  └─ images
│  │     ├─ admin-signin.png
│  │     ├─ admin.png
│  │     ├─ alumni-create.png
│  │     ├─ alumni.png
│  │     ├─ checkmark.gif
│  │     ├─ company-info.png
│  │     ├─ imagesUrl.ts
│  │     ├─ recruiter-create.png
│  │     ├─ recruiter.png
│  │     ├─ swipe1.png
│  │     ├─ swipe2.png
│  │     ├─ swipe3.png
│  │     └─ userImage.png
│  ├─ common
│  │  ├─ Dot.tsx
│  │  ├─ Image.tsx
│  │  ├─ Input
│  │  │  ├─ Checkbox.tsx
│  │  │  ├─ FormGroup.tsx
│  │  │  ├─ InputWithAdornment.tsx
│  │  │  ├─ InputWithChips.tsx
│  │  │  ├─ Progress.tsx
│  │  │  ├─ RadioButton.tsx
│  │  │  ├─ SearchInput.tsx
│  │  │  ├─ SelectInput.tsx
│  │  │  ├─ Switch.tsx
│  │  │  ├─ Textarea.tsx
│  │  │  ├─ Toggle.tsx
│  │  │  └─ ToggleSwitch.tsx
│  │  ├─ LayoutSwitch.tsx
│  │  ├─ Title.tsx
│  │  ├─ Tooltip.tsx
│  │  ├─ Typography.tsx
│  │  ├─ badge
│  │  │  └─ index.tsx
│  │  ├─ breadcrumbs
│  │  │  ├─ RouteAwareCrumbs.tsx
│  │  │  ├─ index.ts
│  │  │  └─ useCrumbs.ts
│  │  ├─ button
│  │  │  ├─ ImportButton.tsx
│  │  │  └─ index.tsx
│  │  ├─ modal
│  │  │  ├─ Backdrop.tsx
│  │  │  ├─ Modal.tsx
│  │  │  ├─ ModalActions.tsx
│  │  │  └─ ModalHeader.tsx
│  │  ├─ permissions
│  │  │  ├─ Permission.tsx
│  │  │  ├─ checkPermission.ts
│  │  │  └─ permission.types.ts
│  │  ├─ spinners
│  │  │  ├─ CircularProgress.tsx
│  │  │  ├─ GlobalSpinner.tsx
│  │  │  ├─ LazySpinner.tsx
│  │  │  └─ circular.module.css
│  │  ├─ table
│  │  │  ├─ Pagination.tsx
│  │  │  └─ SimpleTable.tsx
│  │  ├─ tabs
│  │  │  ├─ Tab.tsx
│  │  │  ├─ TabList.tsx
│  │  │  ├─ TabPanel.tsx
│  │  │  ├─ TabPanels.tsx
│  │  │  ├─ Tabs.tsx
│  │  │  ├─ contexts
│  │  │  │  ├─ DescendantContext.tsx
│  │  │  │  └─ TabsContext.tsx
│  │  │  ├─ helpers.ts
│  │  │  └─ index.ts
│  │  └─ toastManager
│  │     ├─ Toast.tsx
│  │     ├─ ToastContainer.tsx
│  │     ├─ ToastNotify.ts
│  │     ├─ emitter.ts
│  │     ├─ helpers.ts
│  │     ├─ hooks
│  │     │  └─ useMountPortal.ts
│  │     ├─ index.ts
│  │     └─ toast.types.ts
│  ├─ constants
│  │  └─ api.ts
│  ├─ contexts
│  │  ├─ GlobalSpinnerContext.tsx
│  │  └─ helpers
│  │     └─ contextFactory.ts
│  ├─ helpers
│  │  ├─ Storage.ts
│  │  ├─ array.ts
│  │  ├─ composeEventHandlers.ts
│  │  ├─ date.ts
│  │  ├─ dom.ts
│  │  ├─ files.ts
│  │  ├─ strings.ts
│  │  └─ withAsync.ts
│  ├─ hoc
│  │  └─ AppErrorBoundary.tsx
│  ├─ hooks
│  │  ├─ table
│  │  │  ├─ useMismatchPages.ts
│  │  │  ├─ usePagination.ts
│  │  │  └─ useTableSlice.ts
│  │  ├─ useComposeRefs.ts
│  │  ├─ useCountryStates.js
│  │  ├─ useDebounce.ts
│  │  ├─ useDisplayDays.ts
│  │  ├─ useDownload.ts
│  │  ├─ useGetCssValue.ts
│  │  ├─ useHasMounted.ts
│  │  ├─ useHover.ts
│  │  ├─ useLayouts.ts
│  │  ├─ useLazySpinner.ts
│  │  ├─ useLockBodyScroll.ts
│  │  ├─ useMediaQuery.ts
│  │  ├─ useNetworkStatus.ts
│  │  ├─ useObserver.ts
│  │  ├─ useOnScreen.ts
│  │  ├─ useOutsideClick.ts
│  │  ├─ usePrevious.ts
│  │  ├─ useQueryParams.ts
│  │  ├─ useScrollPosition.ts
│  │  ├─ useStepper.ts
│  │  ├─ useSwipe.ts
│  │  ├─ useToggleFields.ts
│  │  └─ useToggleState.ts
│  ├─ i18n.tsx
│  ├─ index.css
│  ├─ index.tsx
│  ├─ layouts
│  │  ├─ auth
│  │  │  ├─ components
│  │  │  │  ├─ Banner.tsx
│  │  │  │  └─ Header.tsx
│  │  │  └─ index.tsx
│  │  ├─ components
│  │  ├─ dashboard
│  │  │  ├─ components
│  │  │  │  ├─ LogoutWarning.tsx
│  │  │  │  ├─ NavItem.tsx
│  │  │  │  ├─ UserInfo.tsx
│  │  │  │  ├─ header
│  │  │  │  │  ├─ Chats.tsx
│  │  │  │  │  ├─ MobileMenu.tsx
│  │  │  │  │  ├─ Notifications.tsx
│  │  │  │  │  ├─ TabletMenu.tsx
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ Modal.tsx
│  │  │  │  │  │  ├─ NotificationCard.tsx
│  │  │  │  │  │  └─ NotificationModal.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ sidebar
│  │  │  │     └─ index.tsx
│  │  │  ├─ dashboard.hooks.ts
│  │  │  ├─ dashboard.types.ts
│  │  │  └─ index.tsx
│  │  ├─ error
│  │  ├─ helpers.ts
│  │  ├─ hooks.ts
│  │  └─ success
│  │     └─ index.tsx
│  ├─ locales
│  │  ├─ en.json
│  │  └─ fr.json
│  ├─ pages
│  │  ├─ alumni
│  │  │  └─ admin
│  │  │     ├─ AlumniData.tsx
│  │  │     ├─ CreateAlumni.tsx
│  │  │     ├─ detail
│  │  │     └─ index.tsx
│  │  ├─ auditlogs
│  │  │  └─ admin
│  │  │     ├─ components
│  │  │     │  ├─ AllLogs.tsx
│  │  │     │  ├─ Filters.tsx
│  │  │     │  └─ LogDetail.tsx
│  │  │     └─ index.tsx
│  │  ├─ auth
│  │  │  ├─ admin
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ password
│  │  │  │  │  ├─ CreatePassword.tsx
│  │  │  │  │  ├─ ForgotPassword.tsx
│  │  │  │  │  ├─ RecoverPassword.tsx
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ signin
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ success
│  │  │  │     └─ Welcome.tsx
│  │  │  ├─ alumni
│  │  │  │  ├─ RecoverPassword.tsx
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ signin
│  │  │  │  │  ├─ ForgotPassword.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ signup
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ success
│  │  │  │     ├─ CreateAcount.tsx
│  │  │  │     └─ Welcome.tsx
│  │  │  ├─ components
│  │  │  │  ├─ LoadingText.tsx
│  │  │  │  ├─ UserRepresentation.tsx
│  │  │  │  └─ UserWelcome.tsx
│  │  │  ├─ index.ts
│  │  │  ├─ recruiter
│  │  │  │  ├─ RecoverPassword.tsx
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ signin
│  │  │  │  │  ├─ ForgotPassword.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ signup
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ member
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  └─ primary
│  │  │  │  │     ├─ AddMembers.tsx
│  │  │  │  │     ├─ KeyCodeInput.tsx
│  │  │  │  │     ├─ KnowRecruiter.tsx
│  │  │  │  │     ├─ PrimaryAdminDetails.tsx
│  │  │  │  │     ├─ index.tsx
│  │  │  │  │     └─ user.type.ts
│  │  │  │  └─ succeess
│  │  │  │     └─ AccountCreated.tsx
│  │  │  └─ validationschemas
│  │  │     ├─ alumni.signup.validator.ts
│  │  │     ├─ company.create.validator.ts
│  │  │     ├─ memberrecruiter.validator.ts
│  │  │     ├─ primaryrecruiter.validator.ts
│  │  │     └─ signin.validator.ts
│  │  ├─ components
│  │  │  ├─ UserEngagementCard.tsx
│  │  │  └─ activities
│  │  │     ├─ Feeds.tsx
│  │  │     ├─ UserInfoCard.tsx
│  │  │     └─ index.tsx
│  │  ├─ conversion.ts
│  │  ├─ dashboards
│  │  │  ├─ admin
│  │  │  │  ├─ alumnilist
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ AlumniListData.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ components
│  │  │  │  │  ├─ AlumniData.tsx
│  │  │  │  │  ├─ Connections.tsx
│  │  │  │  │  ├─ ForumReports.tsx
│  │  │  │  │  ├─ ProgressBar.tsx
│  │  │  │  │  ├─ RecruitersData.tsx
│  │  │  │  │  ├─ TotalAlumni.tsx
│  │  │  │  │  └─ TotalRecruiters.tsx
│  │  │  │  ├─ forumreportslist
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ ForumReportListData.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ index.tsx
│  │  │  ├─ alumni
│  │  │  │  ├─ components
│  │  │  │  │  ├─ AlumniSummary.tsx
│  │  │  │  │  ├─ Engagement.tsx
│  │  │  │  │  ├─ ForumActivity.tsx
│  │  │  │  │  └─ TestSkills.tsx
│  │  │  │  └─ index.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ recruiter
│  │  │     ├─ components
│  │  │     │  ├─ Messages.tsx
│  │  │     │  └─ SuggestedAlumni.tsx
│  │  │     └─ index.tsx
│  │  ├─ details
│  │  │  ├─ alumni
│  │  │  │  ├─ alumniactivity
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ modals
│  │  │  │  │     ├─ Engagements.tsx
│  │  │  │  │     ├─ JobsAppliedFor.tsx
│  │  │  │  │     ├─ NumberOfBioViews.tsx
│  │  │  │  │     └─ components
│  │  │  │  │        └─ ItemDetail.tsx
│  │  │  │  ├─ alumnirating
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ RecruiterReviewsCard.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ biodata
│  │  │  │  │  ├─ components
│  │  │  │  │  │  ├─ Banner.tsx
│  │  │  │  │  │  ├─ DetailsCard.tsx
│  │  │  │  │  │  ├─ Education.tsx
│  │  │  │  │  │  ├─ EducationCard.tsx
│  │  │  │  │  │  ├─ JobPreference.tsx
│  │  │  │  │  │  ├─ Portfolio.tsx
│  │  │  │  │  │  ├─ PortfolioCard.tsx
│  │  │  │  │  │  ├─ ReachCard.tsx
│  │  │  │  │  │  ├─ SectionHeader.tsx
│  │  │  │  │  │  ├─ Skills.tsx
│  │  │  │  │  │  └─ WorkExperience.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ index.tsx
│  │  │  ├─ components
│  │  │  │  ├─ ActivityCard.tsx
│  │  │  │  └─ ModalHeader.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ recruiter
│  │  │     ├─ biodata
│  │  │     │  ├─ components
│  │  │     │  │  └─ Banner.tsx
│  │  │     │  ├─ index.tsx
│  │  │     │  └─ tabs
│  │  │     │     ├─ BlockingWarning.tsx
│  │  │     │     ├─ CompanyInformation.tsx
│  │  │     │     ├─ JobPostings.tsx
│  │  │     │     ├─ Members.tsx
│  │  │     │     ├─ Pipelines.tsx
│  │  │     │     ├─ components
│  │  │     │     │  ├─ Education.tsx
│  │  │     │     │  ├─ JobCard.tsx
│  │  │     │     │  ├─ JobPreference.tsx
│  │  │     │     │  ├─ MemberCard.tsx
│  │  │     │     │  ├─ MemberDetails.tsx
│  │  │     │     │  ├─ PipelineCard.tsx
│  │  │     │     │  └─ PrimaryDetails.tsx
│  │  │     │     └─ index.tsx
│  │  │     ├─ index.tsx
│  │  │     ├─ jobposting
│  │  │     │  ├─ ApplicantCard.tsx
│  │  │     │  ├─ JobDescription.tsx
│  │  │     │  ├─ JobMatches.tsx
│  │  │     │  └─ index.tsx
│  │  │     ├─ pipelinedetails
│  │  │     │  ├─ Stage.tsx
│  │  │     │  ├─ Stages.tsx
│  │  │     │  └─ index.tsx
│  │  │     ├─ recruiteractivity
│  │  │     │  ├─ index.tsx
│  │  │     │  └─ modals
│  │  │     │     ├─ AlumniHired.tsx
│  │  │     │     ├─ AlumniRejected.tsx
│  │  │     │     └─ components
│  │  │     │        └─ AlumniCard.tsx
│  │  │     └─ recruiterrating
│  │  │        ├─ components
│  │  │        │  └─ RecruiterReviewsCard.tsx
│  │  │        └─ index.tsx
│  │  ├─ engagement
│  │  │  ├─ MessageDetailPage.tsx
│  │  │  ├─ alumni
│  │  │  │  └─ index.tsx
│  │  │  ├─ components
│  │  │  │  ├─ EmptyEngagement.tsx
│  │  │  │  ├─ MessageDetail.tsx
│  │  │  │  └─ MessageList.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ recruiter
│  │  │     └─ index.tsx
│  │  ├─ errors
│  │  ├─ forum
│  │  │  ├─ FeedDetails.tsx
│  │  │  ├─ FeedVotes.tsx
│  │  │  ├─ admin
│  │  │  │  ├─ ContentDetailPage.tsx
│  │  │  │  ├─ FeedDetails.tsx
│  │  │  │  ├─ FlaggedContent.tsx
│  │  │  │  ├─ FlaggedDetailPage.tsx
│  │  │  │  ├─ FlaggedFeedVotes.tsx
│  │  │  │  ├─ components
│  │  │  │  │  ├─ ActionButton.tsx
│  │  │  │  │  ├─ CalendarInput.tsx
│  │  │  │  │  ├─ CommentCard.tsx
│  │  │  │  │  ├─ FeedCard.tsx
│  │  │  │  │  ├─ FeedGalleryView.tsx
│  │  │  │  │  ├─ Feeds.tsx
│  │  │  │  │  ├─ GroupFilter.tsx
│  │  │  │  │  ├─ Votes.tsx
│  │  │  │  │  └─ flagged
│  │  │  │  │     ├─ ContentDetail.tsx
│  │  │  │  │     ├─ DetailActionButtons.tsx
│  │  │  │  │     ├─ FeedDetailsBody.tsx
│  │  │  │  │     └─ ReportedContent.tsx
│  │  │  │  ├─ context.flagged.ts
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ reducer.types.ts
│  │  │  ├─ alumni
│  │  │  │  ├─ FeedDetails.tsx
│  │  │  │  ├─ components
│  │  │  │  │  ├─ AlumniCard.tsx
│  │  │  │  │  ├─ CommentCard.tsx
│  │  │  │  │  ├─ CompanyInfo.tsx
│  │  │  │  │  ├─ CreateFeed.tsx
│  │  │  │  │  ├─ FeedCard.tsx
│  │  │  │  │  ├─ FeedGalleryView.tsx
│  │  │  │  │  ├─ Feeds.tsx
│  │  │  │  │  ├─ FellowAlumnis.tsx
│  │  │  │  │  ├─ ReportButton.tsx
│  │  │  │  │  ├─ RepostFeed.tsx
│  │  │  │  │  └─ Upvotes.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ profile
│  │  │  │     ├─ AllActivitiesPage.tsx
│  │  │  │     ├─ PostDetailsPage.tsx
│  │  │  │     ├─ PostUpvotesPage.tsx
│  │  │  │     ├─ components
│  │  │  │     │  ├─ Activities.tsx
│  │  │  │     │  ├─ Education.tsx
│  │  │  │     │  ├─ EmptySection.tsx
│  │  │  │     │  ├─ LoadingSection.tsx
│  │  │  │     │  ├─ SkillsRatings.tsx
│  │  │  │     │  └─ WorkExperience.tsx
│  │  │  │     └─ index.tsx
│  │  │  ├─ components
│  │  │  │  ├─ CommentHeader.tsx
│  │  │  │  ├─ ExpandedFeedGallery.tsx
│  │  │  │  ├─ FeedContent.tsx
│  │  │  │  ├─ FeedGallery.tsx
│  │  │  │  ├─ FeedHeader.tsx
│  │  │  │  ├─ Interaction.tsx
│  │  │  │  └─ VoteCard.tsx
│  │  │  ├─ constants.ts
│  │  │  ├─ helpers.ts
│  │  │  └─ index.tsx
│  │  ├─ landing-page
│  │  │  ├─ Alumni
│  │  │  │  └─ alumni.js
│  │  │  ├─ Faqs
│  │  │  │  ├─ faq.js
│  │  │  │  └─ faqCard.js
│  │  │  ├─ Footer
│  │  │  │  └─ footer.js
│  │  │  ├─ Hero
│  │  │  │  └─ hero.js
│  │  │  ├─ Recruiters
│  │  │  │  └─ recruiter.js
│  │  │  ├─ components
│  │  │  │  ├─ Forms
│  │  │  │  │  └─ button.js
│  │  │  │  └─ Navbar
│  │  │  │     └─ Navbar.js
│  │  │  └─ index.tsx
│  │  ├─ profile
│  │  │  ├─ admin
│  │  │  │  ├─ PersonalDetails.tsx
│  │  │  │  ├─ ProfilePic.tsx
│  │  │  │  └─ index.tsx
│  │  │  ├─ alumni
│  │  │  │  ├─ AlumniActivities.tsx
│  │  │  │  ├─ AlumniActivityDetail.tsx
│  │  │  │  ├─ AlumniActivityUpvotes.tsx
│  │  │  │  ├─ activities
│  │  │  │  │  ├─ ActivityCard.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ biodata
│  │  │  │  │  ├─ PrimaryDetails.tsx
│  │  │  │  │  ├─ ReachCard.tsx
│  │  │  │  │  ├─ Resume.tsx
│  │  │  │  │  ├─ ResumePreview.tsx
│  │  │  │  │  ├─ SocialCard.tsx
│  │  │  │  │  ├─ UploadResume.tsx
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  └─ update
│  │  │  │  │     ├─ BasicInfo.tsx
│  │  │  │  │     ├─ SocialLinks.tsx
│  │  │  │  │     ├─ VideoBio.tsx
│  │  │  │  │     ├─ form.type.ts
│  │  │  │  │     └─ index.tsx
│  │  │  │  ├─ components
│  │  │  │  │  ├─ EmptySection.tsx
│  │  │  │  │  ├─ LaptopDatePicker.tsx
│  │  │  │  │  ├─ MobileDatePicker.tsx
│  │  │  │  │  ├─ ProfilePic.tsx
│  │  │  │  │  ├─ SectionHeader.tsx
│  │  │  │  │  ├─ SingleMonth.tsx
│  │  │  │  │  └─ TabletDatePicker.tsx
│  │  │  │  ├─ education
│  │  │  │  │  ├─ CreateOrUpdateEducation.tsx
│  │  │  │  │  ├─ EducationCard.tsx
│  │  │  │  │  ├─ ShowAllEducation.tsx
│  │  │  │  │  ├─ education.type.ts
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ jobpreferences
│  │  │  │  │  ├─ createupdate
│  │  │  │  │  │  ├─ CheckableItem.tsx
│  │  │  │  │  │  ├─ CompanySize.tsx
│  │  │  │  │  │  ├─ Country.tsx
│  │  │  │  │  │  ├─ Industry.tsx
│  │  │  │  │  │  ├─ Language.tsx
│  │  │  │  │  │  ├─ Role.tsx
│  │  │  │  │  │  ├─ Salary.tsx
│  │  │  │  │  │  ├─ WorkPreference.tsx
│  │  │  │  │  │  ├─ form.type.ts
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ portfolio
│  │  │  │  │  ├─ DeletePortfolio.tsx
│  │  │  │  │  ├─ PortfolioCard.tsx
│  │  │  │  │  ├─ PortfolioDetails.tsx
│  │  │  │  │  ├─ createupdate
│  │  │  │  │  │  ├─ Links.tsx
│  │  │  │  │  │  ├─ UploadImage.tsx
│  │  │  │  │  │  ├─ form.type.ts
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ skills
│  │  │  │  │  ├─ EditSkills.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ workexperience
│  │  │  │     ├─ CreateOrUpdateWorkExperience.tsx
│  │  │  │     ├─ ExperienceCard.tsx
│  │  │  │     ├─ ShowAllExperience.tsx
│  │  │  │     ├─ experience.type.ts
│  │  │  │     └─ index.tsx
│  │  │  ├─ components
│  │  │  │  └─ ChangePassword.tsx
│  │  │  ├─ index.tsx
│  │  │  ├─ recruiter
│  │  │  │  ├─ CompanyDetails.tsx
│  │  │  │  ├─ JobPosted.tsx
│  │  │  │  ├─ JobPostingDetails.tsx
│  │  │  │  ├─ UpdateCompany.tsx
│  │  │  │  ├─ UpdateProfile.tsx
│  │  │  │  ├─ biodata
│  │  │  │  │  ├─ PrimaryDetails.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ components
│  │  │  │  │  ├─ DataDisplay.tsx
│  │  │  │  │  └─ SectionHeader.tsx
│  │  │  │  └─ index.tsx
│  │  │  └─ validationSchemas
│  │  │     ├─ adminProfile.validator.ts
│  │  │     ├─ changePassword.validator.ts
│  │  │     ├─ education.validator.ts
│  │  │     ├─ portfolio.validator.ts
│  │  │     ├─ preference.validator.ts
│  │  │     ├─ recruiterProfile.validator.ts
│  │  │     ├─ updateProfile.validator.ts
│  │  │     └─ workexperience.validator.ts
│  │  ├─ recruiter
│  │  │  ├─ admin
│  │  │  │  ├─ BlockingWarning.tsx
│  │  │  │  ├─ RecruitersData.tsx
│  │  │  │  └─ index.tsx
│  │  │  └─ recruiter
│  │  │     ├─ components
│  │  │     │  ├─ AddMemberCard.tsx
│  │  │     │  ├─ DeleteMember.tsx
│  │  │     │  ├─ EditMember.tsx
│  │  │     │  └─ MemberCard.tsx
│  │  │     └─ index.tsx
│  │  ├─ recruitment
│  │  │  ├─ alumni
│  │  │  │  ├─ applications
│  │  │  │  │  ├─ details
│  │  │  │  │  │  ├─ OngoingDetail.tsx
│  │  │  │  │  │  ├─ OngoingDetailPage.tsx
│  │  │  │  │  │  ├─ ShowJobPost.tsx
│  │  │  │  │  │  └─ index.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ components
│  │  │  │  │  ├─ Engagement.tsx
│  │  │  │  │  ├─ JobBoard.tsx
│  │  │  │  │  ├─ OngoingApplication.tsx
│  │  │  │  │  └─ RecruitmentStatistics.tsx
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ jobs
│  │  │  │     ├─ JobFilters.tsx
│  │  │  │     ├─ details
│  │  │  │     │  ├─ JobDetail.tsx
│  │  │  │     │  ├─ JobDetailPage.tsx
│  │  │  │     │  └─ index.tsx
│  │  │  │     └─ index.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ recruiter
│  │  │     ├─ components
│  │  │     │  ├─ HiredAlumni.tsx
│  │  │     │  ├─ RecentJobs.tsx
│  │  │     │  ├─ RecruiterActions.tsx
│  │  │     │  └─ RecruitmentSummary.tsx
│  │  │     ├─ index.tsx
│  │  │     ├─ jobsposting
│  │  │     │  ├─ CreateOrUpdateJob.tsx
│  │  │     │  ├─ DeleteJob.tsx
│  │  │     │  ├─ JobCard.tsx
│  │  │     │  ├─ alumni
│  │  │     │  │  ├─ AlumniFeedbackSuccess.tsx
│  │  │     │  │  ├─ AlumniHired.tsx
│  │  │     │  │  ├─ Education.tsx
│  │  │     │  │  ├─ HeaderItem.tsx
│  │  │     │  │  ├─ JobPreference.tsx
│  │  │     │  │  ├─ Portfolio.tsx
│  │  │     │  │  ├─ PrimaryDetails.tsx
│  │  │     │  │  ├─ RateAlumni.tsx
│  │  │     │  │  ├─ RejectApplication.tsx
│  │  │     │  │  ├─ SelectJobs.tsx
│  │  │     │  │  ├─ Skills.tsx
│  │  │     │  │  ├─ WorkExperience.tsx
│  │  │     │  │  └─ index.tsx
│  │  │     │  ├─ detail
│  │  │     │  │  ├─ ApplicantCard.tsx
│  │  │     │  │  ├─ JobDescription.tsx
│  │  │     │  │  ├─ JobMatches.tsx
│  │  │     │  │  └─ index.tsx
│  │  │     │  └─ index.tsx
│  │  │     ├─ pipeline
│  │  │     │  ├─ AllPipelines.tsx
│  │  │     │  ├─ CreateOrUpdatePipeline.tsx
│  │  │     │  ├─ PipelineActivity.tsx
│  │  │     │  ├─ PipelineCard.tsx
│  │  │     │  ├─ StageInput.tsx
│  │  │     │  ├─ constant.ts
│  │  │     │  ├─ details
│  │  │     │  │  ├─ Stage.tsx
│  │  │     │  │  ├─ Stages.tsx
│  │  │     │  │  └─ index.tsx
│  │  │     │  └─ index.tsx
│  │  │     └─ validators
│  │  │        ├─ job.validator.ts
│  │  │        └─ pipeline.validator.ts
│  │  ├─ reports
│  │  │  ├─ alumni
│  │  │  │  ├─ alumniregistered
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ AlumniRegisteredData.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ blockedalumni
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ BlockedAlumniData.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ engagedalumni
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ EngagedAlumniData.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  ├─ profilecompletionrate
│  │  │  │  │  ├─ components
│  │  │  │  │  │  └─ ProfileCompletionRateData.tsx
│  │  │  │  │  └─ index.tsx
│  │  │  │  └─ rejectedalumni
│  │  │  │     ├─ components
│  │  │  │     │  └─ RejectedAlumniData.tsx
│  │  │  │     └─ index.tsx
│  │  │  ├─ dashboard
│  │  │  │  ├─ LocationDemographic.tsx
│  │  │  │  ├─ components
│  │  │  │  │  ├─ AlumniReports.tsx
│  │  │  │  │  ├─ ForumEngagements.tsx
│  │  │  │  │  ├─ RecruiterReports.tsx
│  │  │  │  │  ├─ UserGrowth.tsx
│  │  │  │  │  └─ demographics
│  │  │  │  │     ├─ GenderDemographics.tsx
│  │  │  │  │     ├─ LocationDemographics.tsx
│  │  │  │  │     └─ index.tsx
│  │  │  │  └─ index.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ recruiters
│  │  │     ├─ blockedrecruiters
│  │  │     │  ├─ components
│  │  │     │  │  └─ BlockedRecruitersData.tsx
│  │  │     │  └─ index.tsx
│  │  │     ├─ hiredalumni
│  │  │     │  ├─ components
│  │  │     │  │  └─ HiredAlumniData.tsx
│  │  │     │  └─ index.tsx
│  │  │     └─ registeredrecruiters
│  │  │        ├─ components
│  │  │        │  ├─ RegisteredRecruiterFilters.tsx
│  │  │        │  └─ RegisteredRecruitersData.tsx
│  │  │        └─ index.tsx
│  │  ├─ setting
│  │  │  ├─ admin
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ user-permissions
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ roles
│  │  │  │  │  │  ├─ CreateRole.tsx
│  │  │  │  │  │  ├─ DeleteRole.tsx
│  │  │  │  │  │  ├─ EditRole.tsx
│  │  │  │  │  │  ├─ PermissionSets.tsx
│  │  │  │  │  │  ├─ ReassignUsers.tsx
│  │  │  │  │  │  ├─ RoleDetail.tsx
│  │  │  │  │  │  ├─ Roles.tsx
│  │  │  │  │  │  └─ createrole.validator.ts
│  │  │  │  │  └─ users
│  │  │  │  │     ├─ CreateUser.tsx
│  │  │  │  │     ├─ DeleteUser.tsx
│  │  │  │  │     ├─ EditUser.tsx
│  │  │  │  │     ├─ MakePrimary.tsx
│  │  │  │  │     ├─ Users.tsx
│  │  │  │  │     └─ createuser.validator.ts
│  │  │  │  └─ webhooks
│  │  │  │     └─ index.tsx
│  │  │  ├─ alumni
│  │  │  │  └─ index.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ recruiter
│  │  │     └─ index.tsx
│  │  └─ skills_test
│  │     ├─ admin
│  │     │  ├─ AdminTestDetail.tsx
│  │     │  ├─ components
│  │     │  │  ├─ AddCategory.tsx
│  │     │  │  ├─ AddNewTest.tsx
│  │     │  │  ├─ AdminActions.tsx
│  │     │  │  ├─ AdminJobRoleActions.tsx
│  │     │  │  ├─ CategoryList.tsx
│  │     │  │  ├─ CategorySummary.tsx
│  │     │  │  ├─ CoverPic.tsx
│  │     │  │  ├─ CreateCategory.tsx
│  │     │  │  ├─ EditTestInfo.tsx
│  │     │  │  ├─ ProfilePic.tsx
│  │     │  │  ├─ TestInfo.tsx
│  │     │  │  ├─ TestQuestions.tsx
│  │     │  │  └─ form.type.ts
│  │     │  ├─ index.tsx
│  │     │  └─ validators
│  │     │     └─ testBodySchema.validator.ts
│  │     ├─ dashboard
│  │     │  ├─ components
│  │     │  │  ├─ LeaderBoard.tsx
│  │     │  │  ├─ LeaderBoardSummary.tsx
│  │     │  │  ├─ Rating.tsx
│  │     │  │  ├─ ShowRatingDetails.tsx
│  │     │  │  ├─ SkillBadges.tsx
│  │     │  │  ├─ TestList.tsx
│  │     │  │  └─ TestSummary.tsx
│  │     │  └─ index.tsx
│  │     ├─ detail
│  │     │  ├─ Backdrop.tsx
│  │     │  ├─ LeaderBoard.tsx
│  │     │  ├─ Modal.tsx
│  │     │  ├─ ModalHeader.tsx
│  │     │  ├─ Test.tsx
│  │     │  ├─ TestDetail.tsx
│  │     │  └─ index.tsx
│  │     └─ index.tsx
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ routes
│  │  ├─ ProtectedRoutes.tsx
│  │  ├─ PublicRoutes.tsx
│  │  └─ index.tsx
│  ├─ setupTests.ts
│  ├─ store
│  │  ├─ alumniSlice.ts
│  │  ├─ auditLogSlice.ts
│  │  ├─ authSlice.ts
│  │  ├─ dashboardSlice.ts
│  │  ├─ engagementSlice.ts
│  │  ├─ forumSlice.ts
│  │  ├─ hooks.ts
│  │  ├─ index.ts
│  │  ├─ languageSlice.ts
│  │  ├─ notificationSlice.ts
│  │  ├─ optionsSlice.ts
│  │  ├─ profileSlice.ts
│  │  ├─ ratingSlice.ts
│  │  ├─ recruitementSlice.ts
│  │  ├─ recruitersSlice.ts
│  │  ├─ reportSlice.ts
│  │  └─ testSlice.ts
│  └─ types
│     └─ polymorphic.type.ts
├─ stylelint.config.js
├─ tailwind.config.js
├─ tsconfig.json
└─ tsconfig.paths.json

```

## Things To Know

This project was implemented with react library. Thus to go through the codebase you must have a solid understanding of javascript and react.

Create React App (CRA) was used in setting up this project, with a typescript template and the tool CRA Configuration Override (CRACO) was used to enhance CRA for typescript so that we can support alias and other rich features of CRACO and its ecosystem of plugins.

Webpack was used as the bundler since CRA ships with webpack. Thus any additional configuration was made possible by the use of CRACO.

## Folder Structure

The following subsections explain the structure and the architecture of the application. This will help any stakeholders (developers) to find whatever information they are looking for and where to place files for future development.

### Configuration files

All files on the root of the folder ending with `config.js` or `.json` are different configuation files for different tools use during development, e.g., tailwind.config.js, tsconfig.json, stylelint.config.ts, etc.

### public

This folder contain any files we want any users to have access to on the web. This folder generally include company logo, favicon, manifest.json, etc. Any other files that you don't want webpack to control should be placed in this folder and the web will be able to get it by just referencing it on the browser.

### src

This is where the implementation of the application is. The following sub-directions shows how the architecture of the application is structured.

#### api

The `api` folder, which will contain the API Layer of our application. It will have methods that are responsible for performing API requests and communicating with a server. The base file of this folder is the `api.ts` file, which is responsible for handling all request and response. This project uses `axios` as it's base tool for implementing the api layer. Thus the developer must be confortable working with axios and its types!

#### assets

The `assets` folder contains fonts and images . In the fonts , you can keep any custom fonts and typefaces. In images store any pictures used throughout the application. Here we basically all our custom icons and images. As can see from the diagram above, there is an image and icons sub-directory. The icons directory hold basically `.svg` files that the application needs, While the images contain any `.png` or `.jpeg` files.

#### common

The common directory will contain any reusable components that are commonly used throughout the application. For instance, buttons, form components, components related to typography, and so on.

#### hooks

The `hooks` directory, as the name suggests, would hold any custom and reusable hooks. Note that any hooks that are not really reusable, but are coupled to a specific feature, should be placed in the same directory as that feature. An example we have in this project is `toastManager` which a hooks sub-directory, as shown in the project structure above.

The reason for doing this is that, it’s best to keep logic that is coupled as closely as possible to where it is used. This way, we will not unnecessarily add more code into the global hooks folder that should contain only reusable hooks. The same applies to other functionality, such as helpers, services, etc.

#### contexts

The `context` directory should contain any global-level context state providers. Providers are provided by the react library. Any reusable context can also be placed here. Again thesame logic should apply as for hooks.

#### layouts

The `layouts` directory, as the name suggests, should have components that provide different layouts for your pages. For example, in this application we have three types of layouts:

1. authention layouts
2. error pages layouts
3. dashboard layouts

These are shown as sub-directory of the layouts folder. As we can see in the project snapshot, there is a `components` folder at the layouts directory. This holds all components that are common to all layouts of the applications. Again, following thesame reason that we should keep things near to where they are being used.

#### constants

Here you can put any constant variables that are used throughout the application. It’s a good practice to capitalise your constants to distinguish them from other variables and localised constants in your app.

Below are some examples of defining and using constants.

```

// in constants/appConstants.ts
export const APP_NAME = 'Super app'
export const WIDGETS_LABEL = 'Widgets'

// Somewhere in your app
import { APP_NAME, WIDGETS_LABEL } from '@/constants/appConstants'
console.log(APP_NAME) // You can also grab all named exports from the file

import * as APP_CONSTANTS from '@/constants/appConstants'

```

#### helpers

Any utilities and small reusable functions should go here - for example, functions to format date, time, etc.

#### locales

Intl, also known as i18n, is about displaying the content of an app in a format appropriate to the user’s locale. This content can include but not be limited to translated text or specific format of dates, time, and currency. For instance, whilst the UK uses DD/MM/YYYY format, the US uses MM/DD/YYYY. We used the `locales` folder to store the Intl for the application, since the platform support multiple languages.

#### store

The store folder is responsible for files related to global state management. There are many state management solutions that can be used for React projects, such as Redux, Zustand, Jotai, and many many more. In this application we used Redux Tool kit (RTK), which is an extension of Redux.

#### types

Here you can put any global and shareable types. Similarly the same reasoning should go to for this, keep all feature type as closely as possible to where they are needed.

#### pages

Usually, the `pages` directory only contains route/page components. For example, if we have a page that is supposed to allow users to view alumni, we would have a component Alumni in the `pages` folder. This folder was structured based on the user types that exist on the system. For Every feature area - what appear on menu of the application, e.g., alumni, forum, recruiters, skill tests, etc. - we may have three sub-folder for each user type and possibly a component, utils, helpers, etc if these are shared between the user types. Here is an example of that structure:

```
├─ setting
│  │  │  ├─ admin
│  │  │  │  ├─ index.tsx
│  │  │  │  ├─ user-permissions
│  │  │  │  │  ├─ index.tsx
│  │  │  │  │  ├─ roles
│  │  │  │  │  │  ├─ CreateRole.tsx
│  │  │  │  │  │  ├─ DeleteRole.tsx
│  │  │  │  │  │  ├─ EditRole.tsx
│  │  │  │  │  │  ├─ PermissionSets.tsx
│  │  │  │  │  │  ├─ ReassignUsers.tsx
│  │  │  │  │  │  ├─ RoleDetail.tsx
│  │  │  │  │  │  ├─ Roles.tsx
│  │  │  │  │  │  └─ createrole.validator.ts
│  │  │  │  │  └─ users
│  │  │  │  │     ├─ CreateUser.tsx
│  │  │  │  │     ├─ DeleteUser.tsx
│  │  │  │  │     ├─ EditUser.tsx
│  │  │  │  │     ├─ MakePrimary.tsx
│  │  │  │  │     ├─ Users.tsx
│  │  │  │  │     └─ createuser.validator.ts
│  │  │  │  └─ webhooks
│  │  │  │     └─ index.tsx
│  │  │  ├─ alumni
│  │  │  │  └─ index.tsx
│  │  │  ├─ index.tsx
│  │  │  └─ recruiter
│  │  │     └─ index.tsx

```

Where the `setting` is the feature area, and since it appears on all the user types (`admin`, `alumni` and `recruiter`) on the system, the three sub-folders are created. On the root of the `setting` directory, then only one export is made, this is found on the `index.tsx` file, thus making it easy to use in the route configuration specified in the `index.tsx` file of the routes folder discussed next. Thus based on the user type, going to thesame link will redirect the user to the appropriate page.

The index.tsx file for each module or feature area will basically include similar content as this:

```
import { useDashboard } from '@/layouts/hooks'

import AdminSettings from './admin'
import AlumniSettings from './alumni'
import RecruiterSettings from './recruiter'

const Settings = () => {
  const Component = useDashboard({
    admin: AdminSettings,
    alumni: AlumniSettings,
    recruiter: RecruiterSettings,
  })

  return <Component />
}

export default Settings

```

Where the `useDashboard` hook is a custom hook, the developer made so as to map the user type to his appropriate screen. You provide to the hook a map of user type to its respective component, then it has the ability to return to you the actual component that is being used based on the user type that is logged in, to the platform.

#### routes

Here we setup the rules for what page will be made accessible to the public in the application, i.e.,doesn't need authentication and what need authentication. These are named PublicRoutes.tsx and ProtectedRoutes.tsx

The `index.tsx` file in this directory contains the route configuration for the entire application, which is to be imported into `App.js` file.

## Rationale

This project was choosen based on the ease of finding folders in your project and with a consistent naming, so as to easily find whatever you are looking for.

Also, we don't want to keep files belonging to a particular feature scattered everywhere on the application, since multiple developers will be working on the project.

## Usage Guide

Here I will try and work you through some use cases and how to use all the files in the different folder and how everything comes together.

#### How to add a Dashboard for a new user category

The `dashboard` is a feature area, and it appears on all the user types (`admin`, `alumni` and `recruiter`) on the system. The three subfolders for these user types are created in the `dashbaord` folder. On the root of the `dashboard` directory, only one export is made, this is found on the `index.tsx` file. To include a dashboard for a new user category, a new subfolder for the user category is added in the `dashboard` folder and the route configuration for the the new user category is included in the `index.tsx` file as shown below:

```
import { useDashboard } from '@/layouts/hooks'
import AdminDashboard from './admin'
import AlumniDashboard from './alumni'
import RecruiterDashboard from './recruiter'

const Dashboard = () => {
  const Component = useDashboard({
    admin: AdminDashboard,
    alumni: AlumniDashboard,
    recruiter: RecruiterDashboard,
  })

  return <Component />
}

export default Dashboard


```

TODO: //

## Make Contributions

Clone the current repo into your local workspace and make changes, then push back. Your changes will be made visible once you have made a pull request to the development branch.

The development branch is connect to vercel/aws, thus once any changes are made, a CICD on one of this platform will pick up the changes and generate a new deployment.

## I hope you enjoy reading this, for any contribution and comments on this, kindly make a pull request!
