import { StyleSheet } from 'react-native';

export const adminsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  scrollView: {
    flex: 1,
    marginTop: 10
  },
  headerSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#FCFAFF',
    position: 'relative',
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#111827',
    marginRight: 16,
  },
  activeStatus: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#039855',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
  },
  activeText: {
    color: '#039855',
    fontWeight: '500',
  },
  iconContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    right: -20,
    top: 20,
    backgroundColor: '#F9F5FF',
    padding: 20,
    borderRadius: 100,
    width: 129,
    height: 129,
  },
  adminsList: {
    paddingTop: 8,
  },
  adminCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  adminInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  adminAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  adminDetails: {
    justifyContent: 'center',
    gap: 8
  },
  adminName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#181D27',
    paddingVertical: 4,
    paddingTop: 10,
    justifyContent: "flex-start",
    width: "100%"
  },
  accessLevel: {
    fontSize: 16,
  },
  fullAccess: {
    color: '#8F65F8',
    fontWeight: "600",
    fontSize: 14
  },
  partialAccess: {
    color: '#414651',
    fontWeight: "600",
    fontSize: 14
  },
  menuButton: {
    padding: 8,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#8F65F8',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 24,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8F65F8',
    marginLeft: 8,
  },
  actionSheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    width: "100%"
  },
  actionSheetTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  accessLevelContainer: {
    justifyContent: 'space-between',
    paddingVertical: 12,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 10
  },
  accessLevelButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 8
  },
  accessLevelText: {
    fontSize: 16,
    color: '#111827',
  },
  permissionsContainer: {
    width: "100%",
    paddingVertical: 12,
  },
  permissionsList: {
    gap: 16,
  },
  permissionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  permissionText: {
    fontSize: 16,
    color: '#111827',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  removeButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DC2626',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#DC2626',
    fontSize: 16,
    fontWeight: '500',
  },
  updateButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#8F65F8',
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
