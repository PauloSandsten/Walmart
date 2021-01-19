export const stores = (query: string, maxResults = 25, radius = 50) => `
  query {
    storesBySearchTerm(
      searchTerm: "${query}"
      searchOptions: { maxResults: ${maxResults}, radius: ${radius} }
    ) {
      stores {
        id
        distance
        displayName
        detailsPageURL
        address {
          postalCode
          address
          addressLine2
          city
          state
          stateFullName
          country
        }
        phone
        openNow
        openDate
        operationalHours {
          open24Hours
          monToFriHrs {
            startHr
            endHr
            openFullDay
            closed
          }
          mondayHrs {
            startHr
            endHr
            openFullDay
            closed
          }
          tuesdayHrs {
            startHr
            endHr
            openFullDay
            closed
          }
          wednesdayHrs {
            startHr
            endHr
            openFullDay
            closed
          }
          thursdayHrs {
            startHr
            endHr
            openFullDay
            closed
          }
          fridayHrs {
            startHr
            endHr
            openFullDay
            closed
          }
          sundayHrs {
            startHr
            endHr
            openFullDay
            closed
          }
          saturdayHrs {
            startHr
            endHr
            openFullDay
            closed
          }
          todayHrs {
            startHr
            endHr
            openFullDay
            closed
          }
          tomorrowHrs {
            startHr
            endHr
            openFullDay
            closed
          }
          nextOpenHrs {
            startHr
            daysUntilOpen
            isoWeekday
          }
          announcement {
            type
            message
          }
        }
        allServices {
          id
          name
          displayName
        }
        services {
          id
          name
          displayName
        }
        nearbyStores {
          id
        }
      }
    }
  }
`;
